import inquirer from "inquirer";

const findDivisors = (number) => {
    const result = [ 1 ];

    for (let i = 2; i <= number; i += 1) {
        if (number % i === 0) result.push(i);
    }
    
    return result;
};

const getArrayIntersection = (arr1, arr2) => {
    const result = [];

    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2.includes(arr1[i])) result.push(arr1[i]);
    }
    
    return result;
};

export const greatestCommonDivisorGame = async() => {
    let rightAnswers = 0;
    let wrongAnswers = 0;

    while (rightAnswers < 3 && wrongAnswers < 1) {
        // the randomMultiplier is not necessary but it gives more options
        const randomMultiplier = Math.floor(Math.random() * 10) + 1;
        const firstNumber = (Math.floor(Math.random() * 10) + 1) * randomMultiplier;
        const secondNumber = (Math.floor(Math.random() * 10) + 1) * randomMultiplier;
        const firstNumberDivisors = findDivisors(firstNumber);
        const secondNumberDivisors = findDivisors(secondNumber);
        const arrayIntersection = getArrayIntersection(firstNumberDivisors, secondNumberDivisors);
        const greatestCommonDivisor = arrayIntersection.pop();

        await inquirer
        .prompt([
            {
                name: 'userAnswer',
                message: `What is the greatest common divisor of the numbers ${firstNumber} and ${secondNumber}?`,
            }
        ])
        .then(answers => {
            if (answers.userAnswer === greatestCommonDivisor.toString()) {
                console.info('The answer is right!');
                rightAnswers += 1;
            } else {
                console.info('The answer is wrong!');
                wrongAnswers += 1;
            }
        })
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
                greatestCommonDivisorGame();
            } else {
                console.info('Ok! Next time! Bye!');
            }
        })
    }

    if (rightAnswers === 3) {
        console.log('Game over! You win!');
    }
};

//greatestCommonDivisorGame();