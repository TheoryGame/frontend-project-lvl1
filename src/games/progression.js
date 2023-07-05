import { random, startCurrentGame } from '../index.js';

const description = 'What number is missing in the progression?';

function generateProgression(start, end, step) {
  const progression = [];
  const hiddenIndex = random(end);
  let missingNumber;

  for (let i = 0; i < end; i += 1) {
    if (i === hiddenIndex) {
      missingNumber = start + i * step;
      progression.push('..');
    } else {
      const currentNumber = start + i * step;
      progression.push(currentNumber);
    }
  }

  return [progression, missingNumber];
}

const generateDataRound = () => {
  const start = random(100);
  const end = random(6) + 5;
  const step = random(10) + 1;
  const [forQuestion, rigth] = generateProgression(start, end, step);
  const dataForQuestion = `${forQuestion.join(' ')}`;
  const rigthAnswer = rigth;
  return [rigthAnswer, dataForQuestion];
};

const startProgressionGame = () => startCurrentGame(description, generateDataRound);
export default startProgressionGame;
