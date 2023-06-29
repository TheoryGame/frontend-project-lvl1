import { getRandomNum, startCurrentGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = (num) => {
  let correctAnswer;
  const limitNum = Math.sqrt(num);

  if (num <= 1) correctAnswer = 'no';

  for (let i = 2; i <= limitNum; i += 1) {
    if (num % i === 0) return correctAnswer = 'no';
  }
  correctAnswer = 'yes';
  return correctAnswer;
};

const getDataForGame = () => {
  const randomNum = getRandomNum(100);
  const rigthAnswer = checkPrime(randomNum);
  const dataForQuestion = `${randomNum}`;
  return [rigthAnswer, dataForQuestion];
};

const isPrime = () => startCurrentGame(description, getDataForGame);
export default isPrime;
