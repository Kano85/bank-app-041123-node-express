import { Router } from 'express';
import {
  getAccounts,
  createAccount,
} from '../controllers/accountController.js';

const router = Router();

router.get('/:userId/accounts', getAccounts);

router.post('/:userId/accounts', createAccount);

export default router;
