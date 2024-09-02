"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
const router = (0, express_1.Router)();
// Define routes
router.get('/', accountController_1.getAccounts); //get all accounts
router.get('/:id', accountController_1.getAccountDetail); //get detail account
router.post('/register', accountController_1.registerAccount); //get detail account
router.put('/change-password/:id', accountController_1.changePasswordAccount); //change password
router.post('/login', accountController_1.loginAccount); //login
exports.default = router;
