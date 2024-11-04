import user from '../models/user.js';
import account from '../models/account.js';

export const loginuser = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  try {
    const foundUser = await user.findOne({
      raw: true,
      attributes: ['id', 'username', 'password'],
      where: {
        username,
        password,
      },
    });

    if (!foundUser) {
      return res.status(401).redirect('/');
    }

    return res.redirect(`/welcome?username=${foundUser.username}`);
  } catch (err) {
    return res.status(500).send('Server error');
  }
};

export const getLoginPage = (req, res) => {
  res.render('index');
};

export const getWelcomePage = async (req, res) => {
  const username = req.query.username;

  if (!username) {
    return res.redirect('/');
  }

  try {
    const foundUser = await user.findOne({
      raw: true,
      where: { username },
      attributes: ['id', 'username'],
    });

    console.log('Found user:', foundUser);

    if (!foundUser) {
      return res.status(404).send('User not found');
    }

    const accounts = await account.findAll({ where: { userId: foundUser.id } });

    return res.render('welcome', {
      user: { username: foundUser.username },
      accounts,
    });
  } catch (err) {
    console.error('Error fetching data:', err);
    return res.status(500).send('Error fetching user data');
  }
};
