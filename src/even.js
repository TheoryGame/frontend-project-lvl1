import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function gameEven() {
  let name = greeting();
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const getRandomInt = function(max) {
      return Math.floor(Math.random() * max);
    };
    const currentRandom = getRandomInt(100);
    console.log(`Question: ${currentRandom}`);
    let answerFromUser = readlineSync.question(`Your answer: `)
    let rigthAnswer = (currentRandom % 2 === 0) ? 'yes' : 'no';
    if (rigthAnswer === answerFromUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerFromUser}' is wrong answer ;(.\n
Correct answer was '${rigthAnswer}'.\n
Let's try again, Bill!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
}
