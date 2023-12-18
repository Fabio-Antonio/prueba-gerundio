import { inject, injectable } from 'inversify';
import { IUser } from '../interfaces/user.interface';
import { TYPES } from '../../types';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository';

// Delete user use case
@injectable()
export class DeleteUserByEmailUseCase {
  constructor(
    @inject(TYPES.UserRepositoryImpl)
    private readonly userRepositoryimpl: UserRepositoryImpl
  ) {}
  public async execute(email: string): Promise<unknown> {
    try {
      //Connect with users db
      await this.userRepositoryimpl.connectDb('users');
      // Use delete by email method from user repository
      await this.userRepositoryimpl.deleteByEmail(email);
      return;
    } catch (error) {
      console.info(error);
      return;
    }
  }
}
