import express, {Request, Response} from "express";
import {default as routerCategory} from './routes/categoryRoute';
import {default as routerMaker} from './routes/makerRoute';
import {default as routerEquipment} from './routes/equipmentRoute';
import {default as routerRole} from './routes/roleRoute';
import {default as routerAccount} from './routes/accountRoute';
import cors from 'cors';
import connectDB from "./db";

const app = express()
app.use(express.json());
app.use(cors());

connectDB();
app.listen(8080);

app.use('/categories', routerCategory);
app.use('/makers', routerMaker);
app.use('/roles', routerRole);
app.use('/accounts', routerAccount);
app.use('/api', routerEquipment);

app.get('/', function (req: Request, res: Response) {
  res.send('Home page')
})