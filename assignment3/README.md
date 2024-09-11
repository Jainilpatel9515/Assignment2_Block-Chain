# IU2241051249

# Lottery Smart Contract

This project implements a simple lottery system using a Solidity smart contract. Participants can enter the lottery by sending Ether, and a random winner is selected by the contract manager, who then transfers the contract's balance to the winner.

## Features
- Players can enter the lottery by sending a minimum of 1 Ether.
- The contract manager (who deploys the contract) cannot enter the lottery.
- A random winner is picked by the manager, and all the Ether in the contract is sent to the winner.
- After a winner is picked, the player list is reset for the next round.

## Usage

1. **Enter the Lottery**: Anyone (except the manager) can enter the lottery by sending at least 1 Ether.
2. **Pick a Winner**: The manager calls the `pickWinner` function to select a random winner from the participants.
3. **Reset**: After a winner is selected, the lottery resets, and a new round can begin.

## Functions
- `enter`: Allows a player to join the lottery by sending at least 1 Ether.
- `pickWinner`: Selects a random winner from the participants and sends them the entire balance of the contract.
- `getPlayers`: Returns the list of players who have entered the lottery.

## Deployment

To deploy this contract:
1. Use a local Ethereum development environment like Ganache, or deploy it on a public Ethereum test network like Rinkeby.
2. Use the `truffle` or `hardhat` framework to compile and deploy the contract.

Example:
```bash
truffle migrate --network development
```
