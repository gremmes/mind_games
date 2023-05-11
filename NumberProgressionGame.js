/* eslint-disable no-console */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
import inquirer from 'inquirer';

let missedElem;

const createProgression = () => {
  const progressionArr = [];
  const arrLength = 8;
  const firstProgressionElem = Math.floor(Math.random() * (20 - 0));
  let currentProgressionElem = firstProgressionElem;
  const progressionStep = Math.floor(Math.random() * (10 - 1));
  const indexMissedElem = Math.floor(Math.random() * (arrLength - 0));

  for (let i = 0; i < arrLength; i += 1) {
    if (i === indexMissedElem) {
      progressionArr.push('..');
      missedElem = currentProgressionElem;
    } else {
      progressionArr.push(currentProgressionElem);
    }
    currentProgressionElem += progressionStep;
  }

  return progressionArr;
};

const numberProgressionGame = async () => {
  let rightAnswers = 0;
  let wrongAnswers = 0;

  while (rightAnswers < 3 && wrongAnswers < 1) {
    const progressionStr = createProgression().join(' ');

    await inquirer
      .prompt([
        {
          name: 'userAnswer',
          message: `What number is missing: ${progressionStr}?`,
        },
      ])
      .then((answers) => {
        if (answers.userAnswer === missedElem.toString()) {
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
          numberProgressionGame();
        } else {
          console.info('Ok! Next time! Bye!');
        }
      });
  }

  if (rightAnswers === 3) {
    console.log('Game over! You win!');
  }
};

export default numberProgressionGame;
