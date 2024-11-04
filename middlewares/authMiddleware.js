export const validateLoginBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  next();
};

// export default (req, res, next) => {
//   const username = req.query.username;

//   if (username) {
//     next(); // If the username exists, proceed to the next middleware/route
//   } else {
//     res.redirect('/'); // If no username, redirect to login page
//   }
// };
