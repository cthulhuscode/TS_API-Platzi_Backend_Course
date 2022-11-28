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
exports.deleteCategory = exports.patchCategory = exports.putCategory = exports.addCategory = exports.getCategory = exports.getCategories = void 0;
const categories_1 = require("../services/categories");
const service = new categories_1.CategoriesService();
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield service.find();
    res.status(200).json({ categories });
});
exports.getCategories = getCategories;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = yield service.findOne(id);
    res.status(200).json({ category });
});
exports.getCategory = getCategory;
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategory = yield service.create(req.body);
    res.status(201).json({ category: newCategory, msg: "Category created" });
});
exports.addCategory = addCategory;
const putCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = req.body;
    const updatedCategory = yield service.update(id, category);
    res.status(200).json({ updatedCategory, msg: `Category ${id} modified` });
});
exports.putCategory = putCategory;
const patchCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const category = req.body;
    const updatedCategory = yield service.update(id, category);
    res.status(200).json({ updatedCategory, msg: `Category ${id} modified` });
});
exports.patchCategory = patchCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleted = yield service.delete(id);
    if (deleted)
        res.status(200).json({ msg: `Category ${id} deleted` });
    else
        res.status(500).json({ msg: `Unable to delete category ${id}` });
});
exports.deleteCategory = deleteCategory;
