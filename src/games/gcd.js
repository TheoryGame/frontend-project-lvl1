import { getRandomNum, startCurrentGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (numFirst, numSecond) => {
  if (numSecond === 0) {
    return numFirst;
  }
  return getGreatestCommonDivisor(numSecond, numFirst % numSecond);
};

const getDataForGameFromGcd = () => {
  const getRandomNumFirst = getRandomNum(100);
  const getRandomNumSecond = getRandomNum(100);
  const rigthAnswer = String(getGreatestCommonDivisor(getRandomNumFirst, getRandomNumSecond));
  const dataForQuestion = `${getRandomNumFirst} ${getRandomNumSecond}`;
  return [rigthAnswer, dataForQuestion];
};

const startGcdGame = () => startCurrentGame(description, getDataForGameFromGcd);
export default startGcdGame;
