import account from '../models/account.js';

export const getAccounts = async (req, res) => {
  const { userId } = req.params;
  try {
    const accounts = await account.findAll({ where: { userId } });
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching accounts' });
  }
};

export const createAccount = async (req, res) => {
  const { userId } = req.params;
  const { accountNumber, balance, accountType } = req.body;
  try {
    const newAccount = await account.create({
      accountNumber,
      balance,
      accountType,
      userId,
    });
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(500).json({ error: 'Error creating account' });
  }
};
