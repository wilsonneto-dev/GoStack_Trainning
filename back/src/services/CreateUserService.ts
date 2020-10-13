import User from 'models/User';
import { getRepository } from 'typeorm';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    usersRepository.create({});
  }
}

export default CreateUserService;
