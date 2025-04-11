const COMMON_VALUE = "2";
const RARE_VALUE = "4";
const THRESHOLD = 0.1;

type RandomValue = typeof COMMON_VALUE | typeof RARE_VALUE;

export const getRandomValue = (): RandomValue => {
  const randomValue = Math.random();

  return randomValue < THRESHOLD ? RARE_VALUE : COMMON_VALUE;
};
