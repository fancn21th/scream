const rowsNumber = 4;

export const getRowHeight = (height = window.innerHeight, gutter = 10) => Math.floor((height - gutter * (rowsNumber + 1)) / 4);
export const colsNumber = 16;
