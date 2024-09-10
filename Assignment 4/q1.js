const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        const hash = crypto.createHash('sha256').update(input.toString()).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input, hash };
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}, Hash: ${result.hash}`);
