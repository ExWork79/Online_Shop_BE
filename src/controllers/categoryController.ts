import { Request, Response } from 'express';
import Category from '../models/categoryModel';

export const getCategories = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      res.status(500).send('Error fetching categories');
    }
  };

export const getCategory = async (req: Request, res: Response) => {
    try {
      const category = await Category.findOne({slug: req.params.slug});
      res.json(category);
    } catch (err) {
      res.status(500).send('Error fetching category');
    }
  };