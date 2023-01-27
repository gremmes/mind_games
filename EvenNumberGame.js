import inquirer from "inquirer";

const isEven = (number) => {
    if (number % 2 === 0) return true;
    else return false;
};

const expectedAnswer = (result) => {
    if (result === true) return 'yes';
    else return 'no';
}

const evenNumberGame = async() => {
    let rightAnswers = 0;
    let wrongAnswers = 0;

    while (rightAnswers < 3 && wrongAnswers < 1) {
        const randomNumber = Math.floor(Math.random() * (100 - 0));
        const result = isEven(randomNumber);
        const answer = expectedAnswer(result);

        await inquirer
        .prompt([
            {
                name: 'userAnswer',
                message:`Is the number ${randomNumber} even? yes/no?`
            }
        ])
        .then(answers => {
            if (answers.userAnswer === answer) {
                console.info('The answer is right!');
                rightAnswers += 1;
            } else {
                console.info('The answer is wrong!');
                wrongAnswers += 1;
            };
        });
    }

    if (wrongAnswers === 1) {
        await inquirer
        .prompt([
            {
                name: 'userAnswer',
                message: 'Do you want to repeat the game? y/n?',
            }
        ])
        .then(answers => {
            if (answers.userAnswer === 'y') {
                evenNumberGame();
            } else {
                console.info('Ok! Next time! Bye!');
            }
        })
    }

    if (rightAnswers === 3) {
        console.log('Game over! You win!');
    }
};
evenNumberGame();