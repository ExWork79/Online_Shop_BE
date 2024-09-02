import { Request, Response } from 'express';
import Maker from '../models/makerModel';

export const getMakers = async (req: Request, res: Response) => {
    try {
      const makers = await Maker.find();
      res.json(makers);
    } catch (err) {
      res.status(500).send('Error fetching makers');
    }
  };

export const getMaker = async (req: Request, res: Response) => {
    try {
      const maker = await Maker.findOne({slug: req.params.maker});
      res.json(maker);
    } catch (err) {
      res.status(500).send('Error fetching maker');
    }
  };