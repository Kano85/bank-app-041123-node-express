import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import account from './account.js';

const transaction = sequelize.define('transaction', {
  transactionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

transaction.belongsTo(account);
account.hasMany(transaction);

export default transaction;
