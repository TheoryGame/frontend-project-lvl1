import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function gameEven() {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const getRandomInt = (max) => Math.floor(Math.random() * max);

    const currentRandom = getRandomInt(100);

    console.log(`Question: ${currentRandom}`);

    const answerFromUser = readlineSync.question('Your answer: ');

    const rigthAnswer = (currentRandom % 2 === 0) ? 'yes' : 'no';
    if (rigthAnswer === answerFromUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerFromUser}' is wrong answer ;(.\n Correct answer was '${rigthAnswer}'. Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
}
