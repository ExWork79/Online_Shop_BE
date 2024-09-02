"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const makerController_1 = require("../controllers/makerController");
const router = (0, express_1.Router)();
// Define routes
router.get('/', makerController_1.getMakers); //get all maker like: Apple, Samsung
router.get('/:maker', makerController_1.getMaker); //get all maker like: Apple, Samsung
exports.default = router;
