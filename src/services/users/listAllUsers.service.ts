import { FindManyOptions, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  IAllUsersReturn,
  IArrayUsers,
} from "../../interfaces/users.interfaces";
import { arrayUserSchema } from "../../schemas/users.schemas";

const listAllUsersService = async (): Promise<IArrayUsers> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);
  const listUsers: Array<User> = await usersRepository.find();
  const users = arrayUserSchema.parse(listUsers);
  return users;
};

export default listAllUsersService;
