const crypto = require('crypto');

function findHashWithPrefix(prefix, baseString) {
    let nonce = 0;
    while (true) {
        const input = baseString + nonce.toString();
        const hash = crypto.createHash('sha256').update(input).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input, hash };
        }
        nonce++;
    }
}

const result = findHashWithPrefix('00000', 'devadnani26');
console.log(`Input: ${result.input}, Hash: ${result.hash}`);
