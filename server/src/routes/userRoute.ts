import express from "express";
import { userModel } from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import { role } from "../middlewares/role_auth";
import { auth } from "../middlewares/auth";


const router = express.Router();

router.get(
  "/getUsername/:id",
  auth,
  role("admin"),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const Userdata = await userModel
        .find()
        .select("name lastName email role");
      res.status(200).json(Userdata);
    } catch (err) {
      res.status(404).send(err);
    }
  }
);

router.get(
  "/getUsername/:id",
  auth,
  role("admin"),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params._id;
      const UserName = await userModel
        .findById(id)
        .select("name lastName");
      res.status(200).json(UserName);
      next();
    } catch (err) {
      res.status(404).send(err);
    }
  }
);

export default router;
