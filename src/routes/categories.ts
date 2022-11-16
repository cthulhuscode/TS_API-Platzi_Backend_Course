import { Request, Response, Router } from "express";
import { CategoriesService } from "../services/categories";

const service = new CategoriesService();

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  const categories = service.find();
  res.status(200).json(categories);
});

router.get("/:id", (req: Request, res: Response) => {
  const category = service.findOne(req.params.id);
  res.status(200).json(category);
});

router.get(
  "/:categoryId/products/:productId",
  (req: Request, res: Response) => {
    const { categoryId, productId } = req.params;
    res
      .status(200)
      .json({ productId, categoryId, name: "Product2", price: 2000 });
  }
);
