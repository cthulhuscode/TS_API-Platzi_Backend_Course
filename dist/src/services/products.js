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
exports.ProductsService = void 0;
const faker_1 = __importDefault(require("faker"));
const boom_1 = __importDefault(require("@hapi/boom"));
class ProductsService {
    constructor() {
        this.products = [];
        this.products = [];
        this.generate();
    }
    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker_1.default.datatype.uuid(),
                name: faker_1.default.commerce.productName(),
                price: parseInt(faker_1.default.commerce.price(), 10),
                image: faker_1.default.image.imageUrl(),
            });
        }
    }
    find(size) {
        return __awaiter(this, void 0, void 0, function* () {
            let productsTemp = [...this.products];
            if (!productsTemp)
                throw boom_1.default.notFound("There are not any product yet");
            if (size && size <= 100)
                productsTemp = this.products.slice(0, size);
            return productsTemp;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = this.products.find((product) => product.id === id);
            if (!product)
                throw boom_1.default.notFound("The product wasn't found");
            return product;
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = Object.assign({ id: faker_1.default.datatype.uuid() }, product);
            if (!newProduct)
                throw boom_1.default.badImplementation("There was an error while creating the new product"); // status code: 500
            this.products.push(newProduct);
            return newProduct;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const productIndex = this.products.findIndex((product) => product.id === id);
            if (productIndex === -1)
                throw boom_1.default.notFound("The product wasn't found");
            const productTemp = this.products[productIndex];
            this.products[productIndex] = Object.assign(Object.assign({}, productTemp), changes);
            return this.products[productIndex];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productIndex = this.products.findIndex((product) => product.id === id);
            if (productIndex === -1)
                throw boom_1.default.notFound("The product wasn't found");
            this.products.splice(productIndex, 1);
            return true;
        });
    }
}
exports.ProductsService = ProductsService;
