import { random, startCurrentGame } from '../index.js';

const description = 'What is the result of the expression?';
const getCalculated = (operandFirst, operator, operandSecond) => {
  switch (operator) {
    case '+':
      return operandFirst + operandSecond;
    case '-':
      return operandFirst - operandSecond;
    case '*':
      return operandFirst * operandSecond;
    default:
      throw new Error('Oops, there is no such operator!');
  }
};

const generateDataRound = () => {
  const operators = ['+', '-', '*'];
  const random1 = random(5);
  const random2 = random(5);
  const getRandomOperator = operators[random(3)];
  const rigthAnswer = getCalculated(random1, getRandomOperator, random2);
  const dataForQuestion = `${random1} ${getRandomOperator} ${random2}`;
  return [rigthAnswer, dataForQuestion];
};

const startCalculationGame = () => startCurrentGame(description, generateDataRound);
export default startCalculationGame;
