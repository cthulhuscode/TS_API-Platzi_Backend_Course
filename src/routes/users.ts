import { Request, Response, Router } from "express";
import { ProductsService } from "../services/products";

const service = new ProductsService();

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  const users = service.find();

  res.json({ users });
});
