import { ICategory } from "../interfaces/ICategory";
import faker from "faker";

export class CategoriesService {
  private categories: ICategory[];

  constructor() {
    this.categories = [];
    this.generate();
  }

  private generate() {
    for (let i = 0; i < 100; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      });
    }
  }

  find() {
    return this.categories;
  }

  findOne(id: string) {
    return this.categories.find((category) => category.id === id);
  }
}
