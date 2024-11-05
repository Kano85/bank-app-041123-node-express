# 💸 Bank App with Node.js & Express.js 🚀

This is a simple banking application that allows users to manage accounts, make transactions, and view transaction history. Built with modern JavaScript technologies and organized for scalability, this project can serve as a foundation for more advanced banking applications.

## 📋 Project Overview

The Bank App is a RESTful application that allows users to:

- Sign up and log in to their accounts.
- Create multiple bank accounts.
- Deposit and withdraw funds.
- Track transaction history.

This app provides an example of using **Node.js** and **Express.js** to build secure and scalable applications with **MVC architecture**.

---

## ✨ Features

- 👥 **User Management**: Create and manage users, each with unique accounts.
- 💼 **Bank Accounts**: Users can create and manage multiple bank accounts.
- 💸 **Transactions**: Supports deposits and withdrawals, with all transactions recorded.
- 📜 **Transaction History**: Access a complete log of each account's transaction history.
- 🔐 **Authentication**: Basic login/logout functionality with authentication middleware for secure access.

---

## 🛠️ Tech Stack

- **Node.js** 🌳: JavaScript runtime for the backend.
- **Express.js** 🚂: Web framework for handling routes and middleware.
- **SQLite** 🗄️: Lightweight database to store users, accounts, and transactions.
- **EJS** 📄: Embedded JavaScript templates for server-side rendering.
- **CSS** 🎨: Styling for UI components.

---

## 📂 Project Structure

```plaintext
├── controllers          # Logic for handling routes
│   ├── accountController.js
│   ├── authController.js
│   └── transactionController.js
├── models               # Database models
│   ├── account.js
│   ├── transaction.js
│   └── user.js
├── routes               # Routes for API endpoints
│   ├── accountRoutes.js
│   ├── authRoutes.js
│   └── transactionRoutes.js
├── views                # EJS templates for UI
│   ├── 404.ejs
│   ├── index.ejs
│   ├── transactions.ejs
│   └── welcome.ejs
├── public               # Public assets (CSS, images)
│   └── css
│       └── styles.css
├── server.js            # Main server file
└── .gitignore           # Git ignore file
```

🚀 Getting Started
Prerequisites
Node.js (v12 or higher)
SQLite (or any other preferred database)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Kano85/bank-app-041123-node-express.git
cd bank-app-041123-node-express
Install dependencies:

npm install
Configure environment variables:

Create a .env file with required database and environment configurations. Example:

DB_PATH=./database.sqlite
SESSION_SECRET=yourSecretKey
Run the app:

npm start
The app will start running on http://127.0.0.1:8081.

📝 Usage
Accessing the Server Locally
URL: Open a browser or API client (like Postman) and navigate to:

http://127.0.0.1:8081
Available Pages:

/: Homepage
/register: Sign up a new user
/login: Log in with user credentials
/accounts: Manage user accounts
/transactions: View transaction history
Default Users and Login Details
The server seeds the database with initial data, including default users and accounts.

Default Users:

Username: jessy

Password: 1111
Account: ACC123
Initial Balance: $500
Username: luke

Password: 2222
Account: ACC456
Initial Balance: $1000
Note: These default credentials are for testing purposes. You can log in using these accounts or register new ones.

Account Management
Create Account: Set up a new bank account under your user profile.
View Accounts: See all accounts linked to your user.
Transactions
Deposit Funds: Add funds to a specified account.
Withdraw Funds: Withdraw available funds from an account.
View Transaction History: See the transaction history for each account.
