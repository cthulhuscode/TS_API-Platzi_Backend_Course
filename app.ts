import express, { Request, Response } from "express";
import { router } from "./src/routes";

const PORT = process.env.PORT || 3000;

const app = express();

// Routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
