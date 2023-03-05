import inquirer from 'inquirer';

let symbol;

// choosing the symbol of the operation and do it
const operationResult = (a, b) => {
    const numberSymbol = Math.floor(Math.random() * 4);
    let result;

    switch (numberSymbol) {
        case 0:
            symbol = '+';
            result = a + b;
            break;

        case 1:
            symbol = '-';
            result = a - b;
            break;

        case 2:
            symbol = '*';
            result = a * b;
            break;

        case 3:
            symbol = '/';
            result = a / b;
            break;
    }

    return result;
}

export const calculatorGame = async() => {
    console.log('What is the right answer?');
    let rightAnswers = 0;
    let wrongAnswers = 0;

    while (rightAnswers < 3 && wrongAnswers < 1) {
        // the randomMultiplier is used to get at least one common integer divisor in case of a division operation
        const randomMultiplier = Math.floor(Math.random() * 4) + 2;
        const secondOperand = Math.floor(Math.random() * 25) + 1;
        const firstOperand = secondOperand * randomMultiplier;
        const result = operationResult(firstOperand, secondOperand);

        await inquirer
        .prompt([
            {
                name:'userAnswer',
                message: `${firstOperand}${symbol}${secondOperand}?`
            },
        ])
        .then(answers => {
            if (answers.userAnswer === Math.floor(result).toString()) {
                console.info('The answer is right!');
                rightAnswers += 1;
            } else {
                console.info('The answer is wrong!');
                wrongAnswers += 1;
            };
        });
    };

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
                calculatorGame();
            } else {
                console.info('Ok! Next time! Bye!');
            }
        })
    }

    if (rightAnswers === 3) {
        console.log('Game over! You win!');
    }
};