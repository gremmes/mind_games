import { calculatorGame } from './CalculatorGame.js';
import { numberProgressionGame } from './NumberProgressionGame.js';
import { evenNumberGame } from './EvenNumberGame.js';
import { primeNumberGame } from './PrimeNumberGame.js';
import { greatestCommonDivisorGame } from './GreatestCommonDivisorGame.js';
import inquirer from 'inquirer';

const mainMenuGame = async() => {
    const arrChoices = [
        'Calculator Game',
        'Number progression Game',
        'Even number Game',
        'Prime number Game',
        'Greatest common divisor Game'
    ];

    await inquirer
    .prompt([
        {
            type: 'rawlist',
            name: 'game',
            message: 'What game would you like to play?',
            choices: [
                'Calculator Game',
                'Number progression Game',
                'Even number Game',
                'Prime number Game',
                'Greatest common divisor Game'
            ],
        }
    ])
    .then(answers => { 
        if(answers.game === arrChoices.at(0)) calculatorGame();
        if(answers.game === arrChoices.at(1)) numberProgressionGame();
        if(answers.game === arrChoices.at(2)) evenNumberGame();
        if(answers.game === arrChoices.at(3)) primeNumberGame();
        if(answers.game === arrChoices.at(4)) greatestCommonDivisorGame();
    })
}

mainMenuGame();