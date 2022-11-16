import faker from "faker";
import { IUser } from "../interfaces/IUser";

export class UsersService {
  private users: IUser[];

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
      });
    }
  }

  find() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
