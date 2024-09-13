# IU2241051249
# Solidity Smart Contracts

## Overview
This repository contains two Solidity smart contracts: one for a basic crowdfunding platform and another for a voting system. These contracts allow users to create crowdfunding campaigns or propose and vote on options, with functionality for managing contributions or querying voting results.

## Smart Contract Descriptions

### 1. Crowdfunding Smart Contract
- **Description:** A crowdfunding contract that allows users to create campaigns, contribute Ether, and manage contributions based on the success of the campaign.
- **Key Functions:**
  - `createCampaign(uint256 _targetAmount, uint256 _duration)`: Launches a new campaign with a target amount and deadline.
  - `contribute(uint256 _campaignId)`: Contributes Ether to a specific campaign.
  - `finalizeCampaign(uint256 _campaignId)`: Ends the campaign and transfers funds to the creator if the target is met.
  - `withdrawContribution(uint256 _campaignId)`: Allows contributors to withdraw their contributions if the campaign does not reach its funding goal.

### 2. Voting System Smart Contract
- **Description:** A voting contract where users can propose options, cast votes, and retrieve the details of proposals or the winning one.
- **Key Functions:**
  - `propose(string calldata _description)`: Allows users to propose a new option with a description.
  - `vote(uint256 _proposalId)`: Casts a vote for a specific proposal.
  - `getProposalsCount()`: Returns the total number of proposals.
  - `getProposal(uint256 _proposalId)`: Returns the description and vote count for a given proposal.
  - `getWinningProposal()`: Returns the ID of the proposal with the highest vote count.

## Usage

### Compilation
Use the Solidity compiler or an online IDE such as [Remix](https://remix.ethereum.org) to compile both contracts.

### Deployment
Deploy the contracts to an Ethereum test network (e.g., Ropsten, Rinkeby) or a local Ethereum environment like Ganache.

### Interaction
Interact with the contracts using Remix, or use JavaScript libraries such as `web3.js` or `ethers.js` to call the contract functions.

- For **Crowdfunding**, you can create and contribute to campaigns, finalize them, or withdraw funds if the campaign fails.
- For **Voting System**, you can propose new options, vote on them, and query the winning proposal.
