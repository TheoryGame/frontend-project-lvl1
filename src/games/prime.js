import { random, startCurrentGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = (num) => {
  const limitNum = Math.sqrt(num);

  if (num <= 1) return 'no';

  for (let i = 2; i <= limitNum; i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const generateDataRound = () => {
  const randomNum = random(100);
  const rigthAnswer = checkPrime(randomNum);
  const dataForQuestion = `${randomNum}`;
  return [rigthAnswer, dataForQuestion];
};

const isPrime = () => startCurrentGame(description, generateDataRound);
export default isPrime;
