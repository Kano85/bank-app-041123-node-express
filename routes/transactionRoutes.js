import { Router } from 'express';
import {
  getTransactions,
  createTransaction,
} from '../controllers/transactionController.js';

const router = Router();

router.get('/:accountId/transactions', getTransactions);

router.post('/:accountId/transactions', createTransaction);

export default router;
