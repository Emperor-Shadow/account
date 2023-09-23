Welcome to the Bank Account Management Website, designed to help you simulate basic bank account transactions conveniently. This user guide will provide you with clear instructions on how to use the site effectively and offer insights into the incorporation of essential programming elements, including classes, switch statements, and try-catch-finally statements, to ensure a seamless user experience.

**Instructions for Using the Website:**

1. **Enter Your Account Details:**
   - Start by entering your "Account Holder Name" and "Account Type" in the respective input fields.
   - Next, specify the initial account balance by entering a numeric value in the "Balance" field.

2. **Perform Transactions:**
   - Once your account details are entered, you can perform three main types of transactions:
     - **Deposit:** Click the "Deposit" button after entering the deposit amount (a positive numeric value) to increase your account balance.
     - **Withdraw:** Use the "Withdraw" button to withdraw funds by entering a valid withdrawal amount (within your available balance).
     - **Check Balance:** Click the "Check Balance" button to view your current account balance.

3. **Exception Handling:**
   - The website incorporates robust error handling to ensure the safety and reliability of your transactions.
   - If you attempt to withdraw more than your available balance or provide invalid input, the system will display an error message.
   - The use of try-catch-finally statements ensures that any errors are gracefully managed, preventing the site from crashing.

4. **Clear Input:**
   - After each transaction, your input field will be cleared automatically for your convenience.

**Behind the Scenes:**

The Bank Account Management Website employs classes, switch statements, and try-catch-finally statements to deliver a smooth user experience:

- **Classes:** The site uses a JavaScript class named "BankAccount" to create account instances with properties for account holder name, account type, and balance. This object-oriented approach makes it easy to manage multiple accounts efficiently.

- **Switch Statements:** The user's transaction choice (Deposit, Withdraw, or Check Balance) is processed using switch statements, ensuring the appropriate action is taken based on their selection.

- **Try-Catch-Finally Statements:** Exception handling is implemented to catch and gracefully handle errors, such as insufficient funds or invalid inputs. This ensures that the website remains robust and responsive even in unexpected situations.

In summary, the Bank Account Management Website offers a user-friendly interface for simulating basic bank transactions while showcasing the use of core programming principles to provide a secure and reliable experience. Enjoy managing your virtual bank accounts effortlessly!