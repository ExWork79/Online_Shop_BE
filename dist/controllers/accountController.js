"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAccount = exports.changePasswordAccount = exports.registerAccount = exports.getAccountDetail = exports.getAccounts = void 0;
const accountModel_1 = __importDefault(require("../models/accountModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const roleModel_1 = __importDefault(require("../models/roleModel"));
const getAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield accountModel_1.default.find();
        res.status(200).json(accounts);
    }
    catch (err) {
        res.status(500).send('Error fetching accounts');
    }
});
exports.getAccounts = getAccounts;
const getAccountDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = yield accountModel_1.default.findOne({ _id: req.params.id });
        res.status(200).json(account);
    }
    catch (err) {
        res.status(500).send('Error fetching account');
    }
});
exports.getAccountDetail = getAccountDetail;
const registerAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, role_id } = req.body;
    if (username && password && role_id) {
        try {
            const existingAcc = yield accountModel_1.default.findOne({ username: username });
            if (existingAcc) {
                return res.status(401).send("Existed account");
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            // Create new user
            const newAcc = new accountModel_1.default({
                username,
                password: hashedPassword,
                role_id
            });
            yield newAcc.save();
            return res.status(200).json(newAcc);
        }
        catch (err) {
            return res.status(401).send("Server error");
        }
    }
    else {
        return res.status(400).json({ error: "Every fields must be filled out" });
    }
});
exports.registerAccount = registerAccount;
const changePasswordAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { new_password, old_password } = req.body;
    if (new_password === "" || old_password === "") {
        return res.status(401).send("Every fields must be filled out");
    }
    let account = yield accountModel_1.default.findById(req.params.id);
    try {
        if (account) {
            if ((yield bcryptjs_1.default.compare(old_password, account.password)) === false) //Compare old password
             {
                return res.status(401).send("Old password not match");
            }
            if (yield bcryptjs_1.default.compare(new_password, account.password)) //Compare new password
             {
                return res.status(401).send("New password must not match old password");
            }
            account.password = yield bcryptjs_1.default.hash(new_password, 10);
            yield account.save();
            return res.status(200).json(account);
        }
        else {
            return res.status(400).send("Server error");
        }
    }
    catch (err) {
        return res.status(400).send("Server error");
    }
});
exports.changePasswordAccount = changePasswordAccount;
const loginAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    let user = yield accountModel_1.default.findOne({ username: username });
    if (!user) {
        return res.status(401).send("Account not found");
    }
    try {
        if (yield bcryptjs_1.default.compare(password, user.password)) {
            let user_role = yield roleModel_1.default.findById(user.role_id);
            return res.status(200).json({ user, role: user_role });
        }
        else {
            return res.status(401).send("Wrong");
        }
    }
    catch (e) {
        res.status(401).send("Server error");
    }
});
exports.loginAccount = loginAccount;
