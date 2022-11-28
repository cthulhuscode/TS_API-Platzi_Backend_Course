"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const products_1 = require("../controllers/products");
const validatorHandler_1 = require("../middlewares/validatorHandler");
const products_2 = require("../schemas/products");
exports.router = (0, express_1.Router)();
exports.router.get("/", products_1.getProducts);
exports.router.get("/:id", (0, validatorHandler_1.validatorHandler)(products_2.getProductSchema, "params"), products_1.getProduct);
exports.router.post("/", (0, validatorHandler_1.validatorHandler)(products_2.createProductSchema, "body"), products_1.addProduct);
exports.router.put("/:id", (0, validatorHandler_1.validatorHandler)(products_2.getProductSchema, "params"), // first validate the id
(0, validatorHandler_1.validatorHandler)(products_2.updateProductSchema, "body"), products_1.putProduct);
exports.router.patch("/:id", (0, validatorHandler_1.validatorHandler)(products_2.getProductSchema, "params"), (0, validatorHandler_1.validatorHandler)(products_2.updateProductSchema, "body"), products_1.patchProduct);
exports.router.delete("/:id", (0, validatorHandler_1.validatorHandler)(products_2.deleteProductSchema, "params"), products_1.deleteProduct);
