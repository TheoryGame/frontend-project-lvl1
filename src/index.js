import readlineSync from 'readline-sync';

export const random = (max) => Math.floor(Math.random() * max);

export const startCurrentGame = (descriptionForGame, getDataForGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(descriptionForGame);

  for (let i = 0; i < 3; i += 1) {
    const [rigthAnswer, dataForQuestion] = getDataForGame();

    console.log(`Question: ${dataForQuestion}`);
    const answerFromUser = readlineSync.question('Your answer: ');

    if (answerFromUser !== String(rigthAnswer)) {
      return console.log(`'${answerFromUser}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
