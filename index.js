// Define a class for BankAccount to create account instances
class BankAccount {
    // Constructor to initialize account properties
    constructor(accountName, accountType) {
        this.accountName = accountName;
        this.accountType = accountType;
        this.balance = 0;
    }

    // Method to deposit funds into the account
    deposit(amount) {
        this.balance += amount;
    }

    // Method to withdraw funds from the account
    withdraw(amount) {
        // Check if there are sufficient funds for withdrawal
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }

    // Method to get the current account balance
    getBalance() {
        return this.balance;
    }
}

// Initialize a variable to hold the user's account
let account;

// Function to handle the "Deposit" button click
function deposit() {
    try {
        // Get the deposit amount entered by the user
        const depositAmount = parseFloat(document.getElementById("balance").value);
        // Check if the input is a valid positive number
        if (isNaN(depositAmount) || depositAmount <= 0) {
            throw new Error("Invalid input");
        }
        // Create a new account if it doesn't exist
        if (!account) {
            const accountName = document.getElementById("accountName").value;
            const accountType = document.getElementById("accountType").value;
            account = new BankAccount(accountName, accountType);
        }
        // Deposit the specified amount into the account
        account.deposit(depositAmount);
        // Display the result
        document.getElementById("result").innerText = `Deposited $${depositAmount}. New balance: $${account.getBalance()}`;
    } catch (error) {
        // Handle and display errors
        document.getElementById("result").innerText = `Error: ${error.message}`;
    } finally {
        // Clear the input field
        clearInput();
    }
}

// Function to handle the "Withdraw" button click
function withdraw() {
    try {
        // Get the withdrawal amount entered by the user
        const withdrawAmount = parseFloat(document.getElementById("balance").value);
        // Check if the input is a valid positive number
        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            throw new Error("Invalid input");
        }
        // Check if an account exists
        if (!account) {
            throw new Error("Account not created");
        }
        // Withdraw the specified amount from the account
        account.withdraw(withdrawAmount);
        // Display the result
        document.getElementById("result").innerText = `Withdrawn $${withdrawAmount}. New balance: $${account.getBalance()}`;
    } catch (error) {
        // Handle and display errors
        document.getElementById("result").innerText = `Error: ${error.message}`;
    } finally {
        // Clear the input field
        clearInput();
    }
}

// Function to handle the "Check Balance" button click
function checkBalance() {
    try {
        // Check if an account exists
        if (!account) {
            throw new Error("Account not created");
        }
        // Display the current account balance
        document.getElementById("result").innerText = `Current balance: $${account.getBalance()}`;
    } catch (error) {
        // Handle and display errors
        document.getElementById("result").innerText = `Error: ${error.message}`;
    } finally {
        // Clear the input field
        clearInput();
    }
}

// Function to clear the input field
function clearInput() {
    document.getElementById("balance").value = "";
}
