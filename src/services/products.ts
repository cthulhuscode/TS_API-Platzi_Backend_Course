import faker from "faker";
import { IProduct } from "../interfaces/IProduct";

export class ProductsService {
  private products: IProduct[] = [];

  constructor() {
    this.products = [];
    this.generate();
  }

  private generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  find(size?: number | undefined) {
    let productsTemp = [...this.products];

    if (size && size <= 100) productsTemp = this.products.slice(0, size);

    return productsTemp;
  }

  findOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  create(product: Omit<IProduct, "id">) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...product,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  update(id: string, changes: Omit<IProduct, "id">) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex === -1) throw new Error("Product not found");

    const productTemp = this.products[productIndex];

    this.products[productIndex] = { ...productTemp, ...changes };

    return this.products[productIndex];
  }

  delete(id: string) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );
    if (productIndex === -1) throw new Error("Product not found");

    this.products.splice(productIndex, 1);

    return true;
  }
}
