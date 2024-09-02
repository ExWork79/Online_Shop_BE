import { Router } from 'express';
import { getCategories, getCategory } from '../controllers/categoryController';

const router = Router();

// Define routes

router.get('/', getCategories); //Get all category, like: laptop, cell-phone,...
router.get('/:slug', getCategory); //Get all category, like: laptop, cell-phone,...

// router.get('/:id', getUserById);
// router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;
