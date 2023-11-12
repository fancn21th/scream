import { ref } from 'vue';

const demo = {
  tooltip: {},
  legend: {
    top: '5%',
    right: '5%',
    orient: 'vertical',
  },
  geo: [
    {
      show: true,
      silent: true,
      id: 'S1',
      zlevel: 1,
      roam: true,
      label: {
        normal: {
          show: true,
        },
      },
      map: '中国',
      boundingCoords: [
        [108.366964, 33.275616],
        [116.135188, 29.029488],
      ],
      layoutCenter: ['50%', '50%'],
      layoutSize: 1080,
      itemStyle: {
        color: 'transparent',
        borderColor: '#414753',
        borderWidth: 2,
      },
      regions: [
        {
          name: '湖北省',
          selected: true,
        },
      ],
      select: {
        itemStyle: {
          shadowColor: '#0B7FD1',
          shadowBlur: 5,
          shadowOffsetX: 10,
          shadowOffsetY: 20,
        },
      },
    },
    {
      show: true,
      silent: false,
      id: 'S2',
      zlevel: 2,
      roam: true,
      label: {
        normal: {
          show: true,
        },
      },
      map: '湖北省',
      boundingCoords: [
        [108.366964, 33.275616],
        [116.135188, 29.029488],
      ],
      layoutCenter: ['50%', '50%'],
      layoutSize: 1080,
      itemStyle: {
        borderWidth: 3,
        borderColor: '#fff',
      },
    },
    {
      show: false,
      silent: false,
      id: 'S3',
      zlevel: 3,
      roam: true,
      label: {
        normal: {
          show: true,
        },
      },
      map: '湖北省',
      boundingCoords: [
        [108.366964, 33.275616],
        [116.135188, 29.029488],
      ],
      layoutCenter: ['50%', '50%'],
      layoutSize: 1080,
      itemStyle: {
        color: 'transparent',
      },
    },
    {
      show: false,
      id: 'S4',
      zlevel: 4,
      roam: true,
      label: {
        normal: {
          show: true,
        },
      },
      map: '湖北省',
      boundingCoords: [
        [108.366964, 33.275616],
        [116.135188, 29.029488],
      ],
      layoutCenter: ['50%', '50%'],
      layoutSize: 1080,
      itemStyle: {
        borderWidth: 3,
        borderColor: '#fff',
      },
    },
  ],
  dataset: {
    source: [
      [
        ['county', 'geo', '项目数', '总金额'],
        ['宜昌市', [111.140801, 30.747312], '16', '900.00'],
        ['武汉市', [114.348204, 30.623025], '13', '700.00'],
        ['孝感市', [113.885608, 31.118116], '12', '720.00'],
        ['十堰市', [110.446495, 32.45798], '9', '700.00'],
      ],
      [
        ['county', 'geo', '项目数', '总金额'],
        ['黄冈市', [115.343867, 30.717343], '22', '900.00'],
        ['荆州市', [112.574526, 29.995051], '24', '700.00'],
        ['襄阳市', [111.944787, 31.930988], '50', '700.00'],
      ],
    ],
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      tooltip: {},
      symbolSize: 30,
      label: {
        position: 'inside',
        show: true,
      },
      labelLine: {
        show: false,
      },
      animationDuration: 0,
      zlevel: 5,
      name: '数据A',
      data: [
        {
          name: '宜昌市',
          value: [
            111.140801,
            30.747312,
            {
              项目数: '16',
              总金额: '900.00',
            },
          ],
        },
        {
          name: '武汉市',
          value: [
            114.348204,
            30.623025,
            {
              项目数: '13',
              总金额: '700.00',
            },
          ],
        },
        {
          name: '孝感市',
          value: [
            113.885608,
            31.118116,
            {
              项目数: '12',
              总金额: '720.00',
            },
          ],
        },
        {
          name: '十堰市',
          value: [
            110.446495,
            32.45798,
            {
              项目数: '9',
              总金额: '700.00',
            },
          ],
        },
      ],
    },
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      tooltip: {},
      symbolSize: 30,
      label: {
        position: 'inside',
        show: true,
      },
      labelLine: {
        show: false,
      },
      animationDuration: 0,
      zlevel: 5,
      name: '数据B',
      data: [
        {
          name: '黄冈市',
          value: [
            115.343867,
            30.717343,
            {
              项目数: '22',
              总金额: '900.00',
            },
          ],
        },
        {
          name: '荆州市',
          value: [
            112.574526,
            29.995051,
            {
              项目数: '24',
              总金额: '700.00',
            },
          ],
        },
        {
          name: '襄阳市',
          value: [
            111.944787,
            31.930988,
            {
              项目数: '50',
              总金额: '700.00',
            },
          ],
        },
      ],
    },
  ],
};

export const useOption = ({}) => {
  const option = ref(null);

  const updateOption = (action) => {
    try {
      const nextOption = demo;
      option.value = nextOption;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    option,
    updateOption,
  };
};
