"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const accountSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "roles"
    }
});
const Account = mongoose_1.default.model('accounts', accountSchema);
exports.default = Account;
