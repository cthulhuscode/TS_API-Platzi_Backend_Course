"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.patchProduct = exports.putProduct = exports.addProduct = exports.getProduct = exports.getProducts = void 0;
const products_1 = require("../services/products");
const service = new products_1.ProductsService();
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { size } = req.query;
    let products = [];
    if (size)
        products = yield service.find(+size);
    else
        products = yield service.find();
    res.status(200).json({ products });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield service.findOne(id);
    res.status(200).json({ product });
});
exports.getProduct = getProduct;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield service.create(req.body);
    res.status(201).json({ product: newProduct, msg: "Product created" });
});
exports.addProduct = addProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = yield service.update(id, product);
    res.status(200).json({ updatedProduct, msg: `Product ${id} modified` });
});
exports.putProduct = putProduct;
const patchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = yield service.update(id, product);
    res.status(200).json({ updatedProduct, msg: `Product ${id} modified` });
});
exports.patchProduct = patchProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield service.delete(id);
    if (deleted)
        res.status(200).json({ msg: `Product ${id} deleted` });
    else
        res.status(500).json({ msg: `Unable to delete product ${id}` });
});
exports.deleteProduct = deleteProduct;
