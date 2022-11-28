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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const faker_1 = __importDefault(require("faker"));
const boom_1 = __importDefault(require("@hapi/boom"));
class CategoriesService {
    constructor() {
        this.categories = [];
        this.generate();
    }
    generate() {
        for (let i = 0; i < 100; i++) {
            this.categories.push({
                id: faker_1.default.datatype.uuid(),
                name: faker_1.default.commerce.department(),
            });
        }
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return [...this.categories];
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = this.categories.find((category) => category.id === id);
            if (!category)
                throw boom_1.default.notFound("The category wasn't found");
            return category;
        });
    }
    create(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = Object.assign({ id: faker_1.default.datatype.uuid() }, category);
            if (!newCategory)
                throw boom_1.default.badImplementation("There was an error while creating the new category"); // status code: 500
            this.categories.push(newCategory);
            return newCategory;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryIndex = this.categories.findIndex((category) => category.id === id);
            if (categoryIndex === -1)
                throw boom_1.default.notFound("The category wasn't found");
            const categoryTemp = this.categories[categoryIndex];
            this.categories[categoryIndex] = Object.assign(Object.assign({}, categoryTemp), changes);
            return this.categories[categoryIndex];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryIndex = this.categories.findIndex((category) => category.id === id);
            if (categoryIndex === -1)
                throw boom_1.default.notFound("The category wasn't found");
            this.categories.splice(categoryIndex, 1);
            return true;
        });
    }
}
exports.CategoriesService = CategoriesService;
