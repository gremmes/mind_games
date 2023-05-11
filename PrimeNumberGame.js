/* eslint-disable no-console */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
import inquirer from 'inquirer';

const isPrime = (number) => {
  if (number < 2) return false;

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) return false;
    divider += 1;
  }

  return true;
};

const expectedAnswer = (result) => {
  if (result === true) return 'yes';
  return 'no';
};

const primeNumberGame = async() => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  while (rightAnswers < 3 && wrongAnswers < 1) {
    const randomNumber = Math.floor(Math.random() * (25 - 0));
    const result = isPrime(randomNumber);
    const answer = expectedAnswer(result);

    await inquirer
      .prompt([
        {
          name: 'userAnswer',
          message: `Is the numer ${randomNumber} prime? yes/no?`,
        },
      ])
      .then((answers) => {
        if (answers.userAnswer === answer) {
          console.info('The answer is right!');
          rightAnswers += 1;
        } else {
          console.info('The answer is wrong!');
          wrongAnswers += 1;
        }
      });
  }

  if (wrongAnswers === 1) {
    await inquirer
      .prompt([
        {
          name: 'userAnswer',
          message: 'Do you want to repeat the game? y/n?',
        },
      ])
      .then((answers) => {
        if (answers.userAnswer === 'y') {
          primeNumberGame();
        } else {
          console.info('Ok! Next time! Bye!');
        }
      });
  }

  if (rightAnswers === 3) {
    console.log('Game over! You win!');
  }
};

export default primeNumberGame;
