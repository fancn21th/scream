import { dataMap, registerMap, getCoordsMap, appendProperties } from './helper';

export const useMap = () => {
  return {
    dataMap,
    registerMap,
    getCoordsMap: () => {
      appendProperties();
      return getCoordsMap();
    },
  };
};
