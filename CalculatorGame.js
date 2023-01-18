import inquirer from 'inquirer';

let symbol;

// choosing the symbol of the operation and do it
const operationResult = (a, b) => {
    const numberSymbol = Math.floor(Math.random() * (4 - 0));
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

const calculatorGame = async () => {
    console.log('What is the right answer? (Use only natural numbers)');
    let rightAnswers = 0;

    while (rightAnswers < 3) {
        const firstOperand = Math.floor(Math.random() * (100 - 0));
        const secondOperand = Math.floor(Math.random() * (firstOperand - 0));
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
            };
        });
    };

    console.log('Game over! You win!');
};

calculatorGame();