

import axios from "axios"
import readline from "readline"

const BASE_URL = 'https://uork.org/search/status/check-account.php?id=';

function getUserInput(question: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    try {
        const userInput = await getUserInput('Insira o ID ou e-mail do usuário: ');

        const url = BASE_URL + userInput;
        const {data} = await axios.get(url);

        console.log(data)
    } catch (error) {
        console.error('Ocorreu um erro');
    }
}

main();