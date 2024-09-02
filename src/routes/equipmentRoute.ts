import { Router } from 'express';
import { getEquipmentBySlug, getEquipmentsByCategory, createEquipment, updateEquipment, deleteEquipment} 
from '../controllers/equipmentController';

const router = Router();

// Define routes

router.get('/:category/:slug', getEquipmentBySlug); //Get equipment by maker or slug
router.get('/:category', getEquipmentsByCategory); //Get equipments by category
router.post('/:category/:maker', createEquipment);
router.put('/:category/:maker/:id', updateEquipment);
router.delete('/:category/:maker/:id', deleteEquipment);

export default router;
