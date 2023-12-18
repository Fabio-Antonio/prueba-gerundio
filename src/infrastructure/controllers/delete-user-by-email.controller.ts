import { Controller } from '../../presentation/http/controller/controller';
import { inject, injectable } from 'inversify';
import { Request } from 'express';
import { TYPES } from '../../types';
import { HttpCode } from '../../domain/interfaces/configurations.interfaces';
import { DeleteUserByEmailUseCase } from '../../domain/use-cases/delete-user-by-email.usecase';

//Delete user controller injecting delete user usecase
@injectable()
export class DeleteUserByEmailController implements Controller {
  constructor(
    @inject(TYPES.DeleteUserByEmailUseCase)
    private readonly deleteUserByEmailUseCase: DeleteUserByEmailUseCase
  ) {}
  // Run async method run to get response from usecase
  async run(req: Request): Promise<{ status: number; response: unknown }> {
    const body = req?.params?.email || '';
    const response = await this.deleteUserByEmailUseCase.execute(
      body as string
    );
    return {
      status: HttpCode.OK,
      response,
    };
  }
}
