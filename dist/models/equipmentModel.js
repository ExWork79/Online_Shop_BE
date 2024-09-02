"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const equipmentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: Object,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    maker: {
        type: String,
        required: false
    }
});
const Equipment = mongoose_1.default.model('equipments', equipmentSchema);
exports.default = Equipment;
