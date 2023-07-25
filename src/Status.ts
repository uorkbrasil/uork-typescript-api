import readline from "readline"
import axios from "axios"

const BASE_URL: string = 'https://uork.org/search/status/check-status.php?idsolicitacao=';

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
        console.log(data);
    } catch (error) {
        console.error('Ocorreu um erro');
    }
}

main();