import inquirer from 'inquirer';

let missedElem;

const createProgression = () => {
    const progressionArr = [];
    const arrLength = 8;
    const firstProgressionElem = Math.floor(Math.random() * (20 - 0));
    let currentProgressionElem = firstProgressionElem;
    const progressionStep = Math.floor(Math.random() * (10 - 0));
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
}

const numberProgressionGame = async () => {
    console.log('What is the right answer? What number is missing?');
    let rightAnswers = 0;
    
    while (rightAnswers < 3) {
        const progressionStr = createProgression().join(' ');

        await inquirer
        .prompt([
            {
                name: 'userAnswer',
                message: `${progressionStr}?`
            },
        ])
        .then(answers => {
            if (answers.userAnswer === missedElem.toString()) {
                console.info('The answer is right!');
                rightAnswers += 1;
            } else {
                console.info('The answer is wrong!');
            };
        });
    };

    console.log('Game over! You win!');
};

numberProgressionGame();