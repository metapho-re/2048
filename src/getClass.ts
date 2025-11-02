import { COLOR_CLASSES } from "./constants";

export const getClass = (value: number): string =>
  COLOR_CLASSES[Math.log2(value) - 1];
