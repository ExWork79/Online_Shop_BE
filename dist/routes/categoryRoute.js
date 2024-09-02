"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
// Define routes
router.get('/', categoryController_1.getCategories); //Get all category, like: laptop, cell-phone,...
router.get('/:slug', categoryController_1.getCategory); //Get all category, like: laptop, cell-phone,...
// router.get('/:id', getUserById);
// router.post('/', createUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);
exports.default = router;
