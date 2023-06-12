import { getRandomNum, startCurrentGame } from "./index.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNum) => (randomNum % 2 === 0) ? 'yes' : 'no';

const getDataForGame = () => {
  const currentRandomNum = getRandomNum(100);
  const rigthAnswer = isEven(currentRandomNum);
  const dataForQuestion = `${currentRandomNum}`;
  return [rigthAnswer, dataForQuestion];
}

const startEvenGame = () => startCurrentGame(description, getDataForGame);

export default startEvenGame;