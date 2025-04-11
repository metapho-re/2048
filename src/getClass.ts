const classes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

export const getClass = (value: number): string =>
  classes[Math.log2(value) - 1];
