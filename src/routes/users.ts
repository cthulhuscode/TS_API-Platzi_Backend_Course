import { Request, Response, Router } from "express";
import faker from "faker";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.url);
  const { size } = req.query;
  const users = [];

  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    users.push({
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
    });
  }

  res.json({ size, data: users });
});
