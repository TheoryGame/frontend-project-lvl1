import { getRandomNum, startCurrentGame } from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = (num) => {
  const limitNum = Math.sqrt(num);
  for (let i = 2; i <= limitNum; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
};
const dataForGame = () => {
  const randomNum = getRandomNum(100);
  const rigthAnswer = checkPrime(randomNum) ? 'yes' : 'no';
  const dataForQuestion = `${randomNum}`;
  return [rigthAnswer, dataForQuestion];
};

const isPrime = () => startCurrentGame(description, dataForGame);
export default isPrime;
