import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import morgan from 'morgan';
import { sequelize } from './models/index.js';

import user from './models/user.js';
import account from './models/account.js';
import transaction from './models/transaction.js';

import authRoutes from './routes/authRoutes.js';
import accountRoutes from './routes/accountRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';

const APP = express();
const IP = '127.0.0.1';
const PORT = 8081;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

APP.set('view engine', 'ejs');
APP.set('views', path.join(__dirname, 'views'));

APP.use(express.static('public'));
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));
APP.use(morgan('tiny'));

APP.use('/', authRoutes);
APP.use('/users', accountRoutes);
APP.use('/accounts', transactionRoutes);

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log('Database & tables created!');

    const users = await user.bulkCreate([
      { username: 'jessy', password: '1111' },
      { username: 'luke', password: '2222' },
    ]);

    const accounts = await account.bulkCreate([
      { accountNumber: 'ACC123', balance: 500, userId: users[0].id },
      { accountNumber: 'ACC456', balance: 1000, userId: users[1].id },
    ]);

    await transaction.bulkCreate([
      { transactionType: 'deposit', amount: 200, accountId: accounts[0].id },
      { transactionType: 'withdrawal', amount: 100, accountId: accounts[0].id },
      { transactionType: 'deposit', amount: 500, accountId: accounts[1].id },
      { transactionType: 'withdrawal', amount: 300, accountId: accounts[1].id },
    ]);

    console.log('Users, accounts, and transactions seeded!');
  })
  .catch((err) => console.error('Database sync error:', err));

APP.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}`);
});

APP.use((req, res) => {
  res.status(404).render('404', { title: '404 - Not Found' });
});
