import { Request, Response, Router } from "express";
import faker from "faker";
import { IProduct } from "../interfaces/IProduct";
import { ProductsService } from "../services/products";

const service = new ProductsService();

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  const { size } = req.query;
  let products: IProduct[] = [];

  if (size) products = service.find(+size);
  else products = service.find();

  res.status(200).json({ products });
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json({ product });
});

router.post("/", (req: Request, res: Response) => {
  const newProduct = service.create(req.body);
  res.status(201).json({ product: newProduct, msg: "Product created" });
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;

  const updatedProduct = service.update(id, product);

  res.status(200).json({ updatedProduct, msg: `Product ${id} modified` });
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;

  const updatedProduct = service.update(id, product);

  res.status(200).json({ updatedProduct, msg: `Product ${id} modified` });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = service.delete(id);

  if (deleted) res.status(200).json({ msg: `Product ${id} deleted` });
  else res.status(500).json({ msg: `Unable to delete product ${id}` });
});
