import { getRandomNum, startCurrentGame } from '../index.js';

const description = 'What number is missing in the progression?';

function generateProgression(startNum, lengthProgression, step) {
  const progression = [];
  const hiddenIndex = getRandomNum(lengthProgression);
  let missingNumber;

  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenIndex) {
      missingNumber = startNum + i * step;
      progression.push('..');
    } else {
      const currentNumber = startNum + i * step;
      progression.push(currentNumber);
    }
  }

  return [progression, missingNumber];
}

const getDataForGame = () => {
  const startNum = getRandomNum(100);
  const lengthProgression = getRandomNum(6) + 5;
  const step = getRandomNum(10) + 1;
  const allProgressionAndRigthAnswer = generateProgression(startNum, lengthProgression, step);
  const [forQuestion, rigth] = allProgressionAndRigthAnswer;
  const dataForQuestion = `${forQuestion.join(' ')}`;
  const rigthAnswer = String(rigth);
  return [rigthAnswer, dataForQuestion];
};

const startProgressionGame = () => startCurrentGame(description, getDataForGame);
export default startProgressionGame;
