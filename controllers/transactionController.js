import transaction from '../models/transaction.js';
import account from '../models/account.js';

export const getTransactions = async (req, res) => {
  const { accountId } = req.params;
  const { username } = req.query;

  try {
    const acc = await account.findByPk(accountId);
    if (!acc) {
      return res.status(404).send('Account not found');
    }

    const transactions = await transaction.findAll({ where: { accountId } });

    return res.render('transactions', {
      account: acc,
      transactions: transactions,
      user: { username },
    });
  } catch (err) {
    res.status(500).send('Error fetching transactions');
  }
};

export const createTransaction = async (req, res) => {
  const { accountId } = req.params;
  const { transactionType, amount } = req.body;

  try {
    const acc = await account.findByPk(accountId);
    if (!acc) {
      return res.status(404).json({ error: 'Account not found' });
    }

    const newTransaction = await transaction.create({
      transactionType,
      amount,
      accountId,
    });

    if (transactionType === 'deposit') {
      acc.balance += parseFloat(amount);
    } else if (transactionType === 'withdrawal' && acc.balance >= amount) {
      acc.balance -= parseFloat(amount);
    } else {
      return res
        .status(400)
        .json({ error: 'Invalid transaction or insufficient funds' });
    }

    await acc.save();

    res.redirect(`/accounts/${accountId}/transactions`);
  } catch (err) {
    console.error('Error creating transaction:', err);
    res.status(500).json({ error: 'Error creating transaction' });
  }
};
