import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const countOfRightAnswers = 3;
  for (let i = 0; i < countOfRightAnswers; i += 1) {
    const getRandomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${getRandomNumber}?`);
    const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
    const answer = readlineSync.question('Your answer:');
    const correctAnswer = isEven(getRandomNumber);
    if (correctAnswer !== answer) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. 
      Let's try again, ${name}.`);
    }
    console.log('Correct');
  }
  return console.log(`Congratulations, ${name}`);
};
