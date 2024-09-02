import { Router } from 'express';
import { getAccounts, getAccountDetail, registerAccount, changePasswordAccount, loginAccount } from '../controllers/accountController';

const router = Router();

// Define routes
router.get('/', getAccounts); //get all accounts
router.get('/:id', getAccountDetail); //get detail account
router.post('/register', registerAccount); //get detail account
router.put('/change-password/:id', changePasswordAccount); //change password
router.post('/login', loginAccount); //login

export default router;
