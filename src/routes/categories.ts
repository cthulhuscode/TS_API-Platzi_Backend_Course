import { Request, Response, Router } from "express";
import faker from "faker";

export const router = Router();

router.get(
  "/:categoryId/products/:productId",
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params;
    res.json({ productId, categoryId, name: "Product2", price: 2000 });
  }
);
