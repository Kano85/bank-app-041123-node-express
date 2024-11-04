import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
import user from './user.js';

const account = sequelize.define('account', {
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
  accountType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Checking',
  },
});

account.belongsTo(user);
user.hasMany(account);

export default account;
