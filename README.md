# Assignment2_Block-Chain
### 1. **HelloWorld**
   - **Filename**: `Q1.sol`
   - **Description**: This contract provides a simple function that returns a "Hello, World!" greeting message.
   - **Functions**:
     - `sayHello()`: Returns the string "Hello, World!".

### 2. **SimpleStorage**
   - **Filename**: `Q2.sol`
   - **Description**: This contract allows users to store and retrieve a single integer value.
   - **Functions**:
     - `set(uint256 _value)`: Sets the stored value to `_value`.
     - `get()`: Returns the stored integer value.

### 3. **Greeting**
   - **Filename**: `Q3.sol`
   - **Description**: This contract allows users to set and get a personalized greeting message.
   - **Functions**:
     - `setGreeting(string memory _message)`: Sets the greeting message to `_message`.
     - `getGreeting()`: Returns the stored greeting message.

### 4. **SimpleCounter**
   - **Filename**: `Q4.sol`
   - **Description**: This contract keeps track of a count and allows it to be incremented.
   - **Functions**:
     - `increment()`: Increments the counter by 1.
     - `getCount()`: Returns the current count value.

### 5. **NameStorage**
   - **Filename**: `Q5.sol`
   - **Description**: This contract allows users to store and retrieve their name.
   - **Functions**:
     - `setName(string memory _name)`: Sets the user's name to `_name`.
     - `getName()`: Returns the stored name.

### 6. **Voting**
   - **Filename**: `Q6.sol`
   - **Description**: This contract allows users to vote for candidates and track the number of votes.
   - **Functions**:
     - `vote(string memory _candidate)`: Adds a vote for the specified candidate.
     - `getVotes(string memory _candidate)`: Returns the number of votes for the specified candidate.

### 7. **OwnerAccess**
   - **Filename**: `Q7.sol`
   - **Description**: This contract restricts certain functions to only the contract owner.
   - **Functions**:
     - `ownerOnlyFunction()`: A function that can only be executed by the owner of the contract.
   - **Modifiers**:
     - `onlyOwner()`: Restricts access to certain functions to only the contract owner.
   - **Events**:
     - `RestrictedAction(string message)`: Emitted when the restricted function is called by the owner.

### 8. **EventLogging**
   - **Filename**: `Q8.sol`
   - **Description**: This contract logs events when actions are performed.
   - **Functions**:
     - `performAction()`: Performs an action and emits an event.
   - **Events**:
     - `ActionPerformed(string message)`: Emitted when an action is performed.

### 9. **SimpleLedger**
   - **Filename**: `Q9.sol`
   - **Description**: This contract acts as a simple ledger, allowing users to add and retrieve ledger entries.
   - **Functions**:
     - `addEntry(string memory description, uint256 amount)`: Adds a new entry with a description and amount to the ledger.
     - `getEntry(uint256 index)`: Returns the details of an entry at a specific index in the ledger.

### 10. **MessageStorage**
   - **Filename**: `Q10.sol`
   - **Description**: This contract allows users to store and retrieve a message string.
   - **Functions**:
     - `setMessage(string memory _message)`: Sets the message string to `_message`.
     - `getMessage()`: Returns the stored message string.

