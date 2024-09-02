import { Request, Response } from 'express';
import Account from '../models/accountModel';
import bcrypt from 'bcryptjs';
import Role from '../models/roleModel';

export const getAccounts = async (req: Request, res: Response) => {
    try {
      const accounts = await Account.find();
      res.status(200).json(accounts);
    } catch (err) {
      res.status(500).send('Error fetching accounts');
    }
};
export const getAccountDetail = async (req: Request, res: Response) => {
    try {
      const account = await Account.findOne({_id: req.params.id});
      res.status(200).json(account);
    } catch (err) {
      res.status(500).send('Error fetching account');
    }
};

export const registerAccount = async (req: Request, res: Response) => {
  const {username, password, role_id } = req.body;
  if (username && password && role_id)
  {
    try 
    {
      const existingAcc = await Account.findOne({username: username});
      if (existingAcc)
      {
        return res.status(401).send("Existed account");
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
    const newAcc = new Account({
      username,
      password: hashedPassword,
      role_id
    });
    await newAcc.save();
      return res.status(200).json(newAcc);
    }
    catch (err)
    {
        return res.status(401).send("Server error");
    }
  }
  else
  {
    return res.status(400).json({error: "Every fields must be filled out"});
  }
}

export const changePasswordAccount = async (req: Request, res: Response) => {
  const {new_password, old_password} = req.body;
  if (new_password === "" || old_password === "")
  {
    return res.status(401).send("Every fields must be filled out");
  }
  let account = await Account.findById(req.params.id);
  try
  {
    if (account)
    {
      if (await bcrypt.compare(old_password, account.password) === false) //Compare old password
      {
        return res.status(401).send("Old password not match");
      }
      if (await bcrypt.compare(new_password, account.password)) //Compare new password
      {
        return res.status(401).send("New password must not match old password");
      }
      account.password = await bcrypt.hash(new_password, 10);
      await account.save();
      return res.status(200).json(account); 
    }
    else
    {
      return res.status(400).send("Server error");
    }
  }
  catch (err) 
  {
    return res.status(400).send("Server error");
  }
}
export const loginAccount = async (req: Request, res: Response) => {
  const {username, password} = req.body;
  let user = await Account.findOne({username: username});
  if (!user)
  {
    return res.status(401).send("Account not found");
  }
  try {
    if (await bcrypt.compare(password, user.password))
    {
      let user_role = await Role.findById(user.role_id);
      return res.status(200).json({user, role: user_role});
    }
    else
    {
      return res.status(401).send("Wrong");
    }
  }
  catch (e) {
    res.status(401).send("Server error");
  }
}