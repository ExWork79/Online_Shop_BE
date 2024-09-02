import { Request, Response } from 'express';
import Equipment from '../models/equipmentModel';

export const getEquipments = async (req: Request, res: Response) => {
    try {
      const equipments = await Equipment.find();
      res.json(equipments);
    } catch (err) {
      res.status(500).send('Error fetching equipments');
    }
  };

export const getEquipmentsByCategory = async (req: Request, res: Response) => {
  const equip = await Equipment.find({category: req.params.category});
  if (equip) {
    res.json(equip);
  } else {
    res.status(404).send('Error nek');
  }
};

export const getEquipmentBySlug = async (req: Request, res: Response) => {
  const equip = await Equipment.findOne({category: req.params.category, slug: req.params.slug});
  if (equip)
  {
      res.json(equip);
      res.status(200);
      return;
  }
  else {
    let equips = await Equipment.find({category: req.params.category, maker: req.params.slug});
    res.json(equips);
    return;
  }
  res.status(404).send("Error");
};

export const createEquipment = async (req: Request, res: Response) => {
  const newEquipment = req.body;
  newEquipment.category = req.params.category;
  newEquipment.maker = req.params.maker;
  newEquipment.slug = req.body.name.toLocaleLowerCase().replaceAll(' ','-');
  let result = await Equipment.create(newEquipment);
  res.status(201).json(result);
};

export const updateEquipment = async (req: Request, res: Response) => {
  const equip = await Equipment.findByIdAndUpdate(req.params.id, req.body)
  
  res.status(201).json(equip);
};

export const deleteEquipment = async (req: Request, res: Response) => {
  const equip = await Equipment.findByIdAndDelete(req.params.id)
  res.status(201).send("Deleted");
};