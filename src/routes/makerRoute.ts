import { Router } from 'express';
import {getMakers, getMaker} from '../controllers/makerController';

const router = Router();

// Define routes
router.get('/', getMakers); //get all maker like: Apple, Samsung
router.get('/:maker', getMaker); //get all maker like: Apple, Samsung


export default router;
