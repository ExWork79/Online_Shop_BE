import { Request, Response } from 'express';
import Role from '../models/roleModel';

export const getRoles = async (req: Request, res: Response) => {
    try {
      const roles = await Role.find();
      res.json(roles);
    } catch (err) {
      res.status(500).send('Error fetching roles');
    }
  };
