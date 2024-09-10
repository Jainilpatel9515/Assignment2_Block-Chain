const crypto = require('crypto');

function findNonceForInput(input, prefix) {
    let nonce = 0;
    while (true) {
        const combinedInput = input + nonce.toString();
        const hash = crypto.createHash('sha256').update(combinedInput).digest('hex');
        if (hash.startsWith(prefix)) {
            return { nonce, hash };
        }
        nonce++;
    }
}

const input = `Dev => Karan | Rs 100\nKaran => Darsh | Rs 10`;
const result = findNonceForInput(input, '00000');
console.log(`Nonce: ${result.nonce}, Hash: ${result.hash}`);
