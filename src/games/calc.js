import { getRandomNum, startCurrentGame } from '../index.js';

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

const getDataForGame = () => {
  const operators = ['+', '-', '*'];
  const getRandomNum1 = getRandomNum(100);
  const getRandomNum2 = getRandomNum(100);
  const getRandomOperator = operators[getRandomNum(3)];
  // Обернуть rigthAnswer в строку нужно, чтобы сравнить с вводом ответа юзера с === оператором.
  const rigthAnswer = String(getCalculated(getRandomNum1, getRandomOperator, getRandomNum2));
  const dataForQuestion = `${getRandomNum1}${getRandomOperator}${getRandomNum1}`;
  return [rigthAnswer, dataForQuestion];
};

const startCalculationGame = () => startCurrentGame(description, getDataForGame);
export default startCalculationGame;
