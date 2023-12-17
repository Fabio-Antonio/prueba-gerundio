import { inject, injectable } from 'inversify';
import { IUser } from '../interfaces/user.interface';
import { TYPES } from '../../types';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository';

@injectable()
export class GetAllUsersUseCase {
  constructor(
    @inject(TYPES.UserRepositoryImpl)
    private readonly userRepositoryimpl: UserRepositoryImpl
  ) {}
  public async execute(): Promise<unknown> {
    try {
      await this.userRepositoryimpl.connectDb('users');
      const result = await this.userRepositoryimpl.getAll();
      return result;
    } catch (error) {
      console.info(error);
      return;
    }
  }
}
