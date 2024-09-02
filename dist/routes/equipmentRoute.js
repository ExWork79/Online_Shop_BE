"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipmentController_1 = require("../controllers/equipmentController");
const router = (0, express_1.Router)();
// Define routes
router.get('/:category/:slug', equipmentController_1.getEquipmentBySlug); //Get equipment by maker or slug
router.get('/:category', equipmentController_1.getEquipmentsByCategory); //Get equipments by category
router.post('/:category/:maker', equipmentController_1.createEquipment);
router.put('/:category/:maker/:id', equipmentController_1.updateEquipment);
router.delete('/:category/:maker/:id', equipmentController_1.deleteEquipment);
exports.default = router;
