import { inject, injectable } from 'inversify';
import { IUser } from '../interfaces/user.interface';
import { TYPES } from '../../types';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository';

//Update user info by email
@injectable()
export class UpdateParcialUserUseCase {
  constructor(
    @inject(TYPES.UserRepositoryImpl)
    private readonly userRepositoryimpl: UserRepositoryImpl
  ) {}
  public async execute(input: IUser): Promise<unknown> {
    try {
      // Connect to user collection
      await this.userRepositoryimpl.connectDb('users');
      // Use update by email method from user repository
      const result = await this.userRepositoryimpl.updateByEmail(
        input.email,
        input
      );
      return result;
    } catch (error) {
      console.info(error);
      return;
    }
  }
}
