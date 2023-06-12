import readlineSync from 'readline-sync';

export const getRandomNum = (max) => Math.floor(Math.random() * max);

export const startCurrentGame = (descriptionForGame, dataForGame) => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${getName}!`);
  console.log(descriptionForGame);

  for (let i = 0; i < 3; i += 1) {
    const [rigthAnswer, dataForQuestion] = dataForGame();

    console.log(`Question: ${dataForQuestion}`);
    const answerFromUser = readlineSync.question('Your answer: ')

    if (answerFromUser !== rigthAnswer) {
      return console.log(`'${answerFromUser}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.\nLet's try again, ${getName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${getName}!`);
};
