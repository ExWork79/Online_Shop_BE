"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryRoute_1 = __importDefault(require("./routes/categoryRoute"));
const makerRoute_1 = __importDefault(require("./routes/makerRoute"));
const equipmentRoute_1 = __importDefault(require("./routes/equipmentRoute"));
const roleRoute_1 = __importDefault(require("./routes/roleRoute"));
const accountRoute_1 = __importDefault(require("./routes/accountRoute"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, db_1.default)();
app.listen(8080);
app.use('/categories', categoryRoute_1.default);
app.use('/makers', makerRoute_1.default);
app.use('/roles', roleRoute_1.default);
app.use('/accounts', accountRoute_1.default);
app.use('/api', equipmentRoute_1.default);
app.get('/', function (req, res) {
    res.send('Home page');
});
