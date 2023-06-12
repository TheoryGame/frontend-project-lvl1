import {getRandomNum, startCurrentGame} from '../index.js';

const description = 'What is the result of the expression?';
const getCalculated = (operandFirst, operator, operandSecond) => {
  switch(operator) {
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
  const operators = ['+','-', '*'];
  const getRandomNumFirst = getRandomNum(100);
  const getRandomNumSecond = getRandomNum(100);
  const getRandomOperator = operators[getRandomNum(3)];
  //Обернуть rigthAnswer в строку нужно, чтобы сравнить с вводом ответа юзера с === оператором.
  const rigthAnswer = String(getCalculated(getRandomNumFirst, getRandomOperator, getRandomNumSecond));
  const dataForQuestion = `${getRandomNumFirst}${getRandomOperator}${getRandomNumSecond}`;
  return [rigthAnswer, dataForQuestion];
};

const startCalculationGame = () => startCurrentGame(description, getDataForGame);
export default startCalculationGame;