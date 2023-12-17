import { inject, injectable } from 'inversify';
import { IUser } from '../interfaces/user.interface';
import { TYPES } from '../../types';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository';

@injectable()
export class DeleteUserByEmailUseCase {
  constructor(
    @inject(TYPES.UserRepositoryImpl)
    private readonly userRepositoryimpl: UserRepositoryImpl
  ) {}
  public async execute(email: string): Promise<unknown> {
    try {
      await this.userRepositoryimpl.connectDb('users');
      await this.userRepositoryimpl.deleteByEmail(email);
      return;
    } catch (error) {
      console.info(error);
      return;
    }
  }
}
