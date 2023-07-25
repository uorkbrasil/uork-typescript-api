import readline from "readline"
import axios from "axios"

const BASE_URL: string = 'https://uork.org/search/status/check-noticias.php';

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
         console.log((await axios.get(BASE_URL)).data);
    } catch (error) {
        console.error('Ocorreu um erro');
    }
}
