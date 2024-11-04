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
