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
exports.deleteEquipment = exports.updateEquipment = exports.createEquipment = exports.getEquipmentBySlug = exports.getEquipmentsByCategory = exports.getEquipments = void 0;
const equipmentModel_1 = __importDefault(require("../models/equipmentModel"));
const getEquipments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const equipments = yield equipmentModel_1.default.find();
        res.json(equipments);
    }
    catch (err) {
        res.status(500).send('Error fetching equipments');
    }
});
exports.getEquipments = getEquipments;
const getEquipmentsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equip = yield equipmentModel_1.default.find({ category: req.params.category });
    if (equip) {
        res.json(equip);
    }
    else {
        res.status(404).send('Error nek');
    }
});
exports.getEquipmentsByCategory = getEquipmentsByCategory;
const getEquipmentBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equip = yield equipmentModel_1.default.findOne({ category: req.params.category, slug: req.params.slug });
    if (equip) {
        res.json(equip);
        res.status(200);
        return;
    }
    else {
        let equips = yield equipmentModel_1.default.find({ category: req.params.category, maker: req.params.slug });
        res.json(equips);
        return;
    }
    res.status(404).send("Error");
});
exports.getEquipmentBySlug = getEquipmentBySlug;
const createEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newEquipment = req.body;
    newEquipment.category = req.params.category;
    newEquipment.maker = req.params.maker;
    newEquipment.slug = req.body.name.toLocaleLowerCase().replaceAll(' ', '-');
    let result = yield equipmentModel_1.default.create(newEquipment);
    res.status(201).json(result);
});
exports.createEquipment = createEquipment;
const updateEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equip = yield equipmentModel_1.default.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json(equip);
});
exports.updateEquipment = updateEquipment;
const deleteEquipment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const equip = yield equipmentModel_1.default.findByIdAndDelete(req.params.id);
    res.status(201).send("Deleted");
});
exports.deleteEquipment = deleteEquipment;
