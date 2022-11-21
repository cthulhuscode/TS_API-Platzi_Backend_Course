import { Router } from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  putProduct,
  patchProduct,
  deleteProduct,
} from "../controllers/products";

export const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", putProduct);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);
