export const validateLoginBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  next();
};
