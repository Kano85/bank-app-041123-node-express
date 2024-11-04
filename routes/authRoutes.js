import { Router } from 'express';
import {
  loginuser,
  getLoginPage,
  getWelcomePage,
} from '../controllers/authController.js';
import { validateLoginBody } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', getLoginPage);

router.post('/login', validateLoginBody, loginuser);

router.get('/welcome', getWelcomePage);

router.get('/logout', (req, res) => {
  req.session = null;
  res.clearCookie('connect.sid');

  res.redirect('/');
});

export default router;
