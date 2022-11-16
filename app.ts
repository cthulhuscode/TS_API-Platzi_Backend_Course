import express, { Request, Response } from "express";
import { json } from "stream/consumers";
import { router } from "./src/routes";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
