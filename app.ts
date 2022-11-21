import express from "express";
import "express-async-errors";
import { router } from "./src/routes";
import { logErrors, errorHandler } from "./src/middlewares/errorHandler";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Routes
app.use(router);

app.use(logErrors);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
