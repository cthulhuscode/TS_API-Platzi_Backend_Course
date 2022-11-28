"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = require("./src/utils/corsOptions");
const routes_1 = require("./src/routes");
const errorHandler_1 = require("./src/middlewares/errorHandler");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
// Routes
app.use(routes_1.router);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
