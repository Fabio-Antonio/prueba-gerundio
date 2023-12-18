import { inject, injectable } from 'inversify';
import { IUser } from '../interfaces/user.interface';
import { TYPES } from '../../types';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository';

// Create user usecase
@injectable()
export class CreateUserUseCase {
  constructor(
    @inject(TYPES.UserRepositoryImpl)
    private readonly userRepositoryimpl: UserRepositoryImpl
  ) {}
  public async execute(input: IUser): Promise<unknown> {
    try {
      //Connect with users db
      await this.userRepositoryimpl.connectDb('users');
      // user register method from user respository
      await this.userRepositoryimpl.register(input as any);
      return input;
    } catch (error) {
      console.info(error);
      return;
    }
  }
}
