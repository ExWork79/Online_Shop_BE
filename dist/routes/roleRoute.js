"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roleController_1 = require("../controllers/roleController");
const router = (0, express_1.Router)();
// Define routes
router.get('/', roleController_1.getRoles); //get all roles: Admin, Seller, Customer
exports.default = router;
