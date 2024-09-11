# IU2241051249

### 1. Hash Finder with SHA-256

#### Description

This script finds an integer input such that the SHA-256 hash of the integer starts with a specified prefix. It simulates the mining process used in blockchain technologies.

#### Features

- **Prefix Matching**: Finds an integer whose SHA-256 hash starts with a specified prefix.
- **Incremental Search**: Iterates through integer values starting from 0 to find a valid hash.

#### Usage

1. **Set Prefix**: Define the prefix (e.g., `'00000'`).
2. **Run the Script**: Execute the script to find a valid hash.
3. **Output**: The script will output the integer input and the corresponding hash.

#### Example

For a prefix of `'00000'`, the script will find an integer whose SHA-256 hash starts with `'00000'`.

---

### 2. Hash Finder with Base String and Nonce

#### Description

This script finds a nonce that, when appended to a base string, results in a SHA-256 hash starting with a specified prefix.

#### Features

- **Prefix Matching**: Finds a nonce that, when appended to a base string, results in a hash starting with the given prefix.
- **Base String Integration**: Uses a base string combined with an incrementing nonce.

#### Usage

1. **Set Prefix and Base String**: Define the prefix (e.g., `'00000'`) and the base string (e.g., `'devadnani26'`).
2. **Run the Script**: Execute the script to find a nonce.
3. **Output**: The script will output the combined input (base string + nonce) and the hash.

#### Example

For a prefix of `'00000'` and a base string of `'devadnani26'`, the script will find a nonce such that the SHA-256 hash of the base string concatenated with the nonce starts with `'00000'`.

---

### 3. Nonce Finder for Custom Input

#### Description

This script finds a nonce for a given input string such that the SHA-256 hash of the input concatenated with the nonce starts with a specified prefix.

#### Features

- **Prefix Matching**: Finds a nonce for a given input string that results in a hash starting with the specified prefix.
- **Custom Input**: Allows any base string to be used.

#### Usage

1. **Set Input and Prefix**: Define the base string (`input`) and the prefix (e.g., `'00000'`).
2. **Run the Script**: Execute the script to find a nonce.
3. **Output**: The script will output the nonce and the corresponding hash.

#### Example

For a prefix of `'00000'` and an input string of:
```
Dev => Karan | Rs 100
Karan => Darsh | Rs 10
```
The script will find a nonce such that the SHA-256 hash of the input concatenated with the nonce starts with `'00000'`.

---

## Solidity Smart Contract

### Donation Smart Contract

#### Description

This Solidity smart contract manages donations on the Ethereum blockchain, allowing users to donate Ether and enabling the contract owner to transfer funds.

#### Features

- **Donation Handling**: Users can send Ether as a donation, and the amount is recorded.
- **Owner-Only Transfers**: Only the contract owner can transfer funds.
- **Balance Inquiry**: Any user can check the current balance of the contract.

#### Functions

- **`donate()`**: Allows users to send Ether as a donation. Emits `DonationReceived(address indexed donor, uint256 amount)`.

- **`transferDonation(address payable recipient, uint256 amount)`**: Transfers Ether from the contract to the recipient. Only the owner can call this function. Emits `DonationTransferred(address indexed recipient, uint256 amount)`.

- **`getBalance()`**: Returns the current balance of the contract in wei.

#### Deployment

1. **Set Up Environment**: Use Remix, Truffle, or Hardhat.
2. **Deploy Contract**: Deploy to a local Ethereum network or public testnet.
