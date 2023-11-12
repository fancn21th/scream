import * as turf from '@turf/turf';
import { dataMap as originalDataMap } from '@/assets/geoJson';
import { calcBoundingCoords } from '@/utils';

// 定制化 dataMap
// data map ===> customized data map (properties) ==> coords map (remove features, add boundingCoords)

export const dataMap = { ...originalDataMap };

// append properties to each area in dataMap
export const appendProperties = () => {
  const propertiesMap = {};

  Object.keys(dataMap).forEach((areaName) => {
    if (dataMap[areaName]) {
      dataMap[areaName].features.forEach(({ properties }) => {
        propertiesMap[properties.name] = properties;
      });
    }
  });

  Object.keys(dataMap).forEach((areaName) => {
    if (dataMap[areaName]) {
      dataMap[areaName].properties = propertiesMap[areaName];
    }
  });
};

// 将若干区域 features 合并成一个新地图
// 添加 children 属性 用于区分是哪些区域合并而成
const addMixedArea = (name, names, option) => {
  dataMap[name] = names.reduce((acc, name) => {
    const data = dataMap[name];
    const features = data.features || [];
    return {
      ...acc,
      features: acc.features.concat(features),
      children: names,
    };
  }, option);
};

// 合并地图
const merge = (features) => {
  return features.reduce((prev, curr) => {
    if (!prev) return curr;
    const union = turf.union(prev, curr);
    return union;
  }, null);
};

const updateByMerge = (parent, target, sources = []) => {
  const parentData = dataMap[parent];
  const targetData = dataMap[target];

  const combinedSource = [...sources, target];
  const withSources = parentData.features.filter(({ properties }) => sources.includes(properties.name));
  const withoutSources = parentData.features.filter(({ properties }) => !combinedSource.includes(properties.name));
  const withCombinedSources = parentData.features.filter(({ properties }) => combinedSource.includes(properties.name));
  const targetFeature = merge(withCombinedSources);

  parentData.features = [
    ...withoutSources,
    {
      ...targetFeature,
      properties: targetData.properties,
    },
  ];

  targetData.features = [...targetData.features, ...withSources];

  // 调整元数据中的层级
  sources.forEach((source) => {
    const sourceData = dataMap[source];
    sourceData.properties.parent.adcode = targetData.properties.adcode;
  });
};

// 注册地图
export const registerMap = (echarts) => {
  if (!echarts) throw new Error('echarts is required');

  Object.keys(dataMap).forEach((name) => {
    echarts.registerMap(name, dataMap[name]);
  });
};

// data map 的 派生状态
// 去掉了 features
// 补充了 boundingCoords
export const getCoordsMap = () => {
  const initialCoordsMap = {};

  // 处理 boundingCoords
  let coordsMap = Object.keys(dataMap).reduce((acc, areaName) => {
    const areaData = dataMap[areaName];
    let concatCoords = [];

    areaData.features.forEach((feature) => {
      const {
        geometry: { coordinates },
      } = feature;
      concatCoords = concatCoords.concat(coordinates);
    });

    return {
      ...acc,
      [areaName]: {
        boundingCoords: calcBoundingCoords(concatCoords),
        properties: areaData.properties,
        children: areaData.children,
      },
    };
  }, initialCoordsMap);

  // 处理层级关系 依赖于 properties
  const temp = Object.keys(coordsMap).reduce((acc, name) => {
    const coordsItem = coordsMap[name];
    const adcode = coordsItem?.properties?.adcode || '';

    return {
      ...acc,
      [adcode]: {
        ...coordsItem,
        // 提升一系列的属性
        name: coordsItem?.properties?.name,
        adcode: coordsItem?.properties?.adcode,
        parent: coordsItem?.properties?.parent?.adcode,
        ref: coordsItem,
      },
    };
  }, {});

  const getLevel = (item) => {
    const parent = temp[item.parent];
    if (!parent) return 2;
    if (parent.level) return parent.level + 1;
    return getLevel(parent) + 1;
  };

  Object.keys(temp).forEach((adcode) => {
    const item = temp[adcode];
    item.level = getLevel(item);
    // 通过应用 设置层级关系
    item.ref.level = item.level;
    const parent = temp[item.parent];
    item.ref.parent = parent?.name;
  });

  return coordsMap;
};
