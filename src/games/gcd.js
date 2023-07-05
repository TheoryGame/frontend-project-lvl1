import { random, startCurrentGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (numFirst, numSecond) => {
  if (numSecond === 0) {
    return numFirst;
  }
  return getGreatestCommonDivisor(numSecond, numFirst % numSecond);
};

const generateDataRound = () => {
  const randomFirst = random(100);
  const randomSecond = random(100);
  const rigthAnswer = getGreatestCommonDivisor(randomFirst, randomSecond);
  const dataForQuestion = `${randomFirst} ${randomSecond}`;
  return [rigthAnswer, dataForQuestion];
};

const startGcdGame = () => startCurrentGame(description, generateDataRound);
export default startGcdGame;
