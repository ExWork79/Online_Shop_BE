import { Router } from 'express';
import { getRoles } from '../controllers/roleController';

const router = Router();

// Define routes
router.get('/', getRoles); //get all roles: Admin, Seller, Customer


export default router;
