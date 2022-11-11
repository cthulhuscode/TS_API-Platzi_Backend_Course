import { Request, Response, Router } from "express";
import faker from "faker";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.url);
  const { size } = req.query;
  const products = [];

  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.status(200).json({ size: limit, data: products });
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = {
    id: id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.imageUrl(),
  };

  res.status(200).json({ data: product });
});
