import { Controller } from '../../presentation/http/controller/controller';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { HttpCode } from '../../domain/interfaces/configurations.interfaces';
import { GetAllUsersUseCase } from '../../domain/use-cases/get-all-users.usecases';

@injectable()
export class GetAllUsersUserController implements Controller {
  constructor(
    @inject(TYPES.GetAllUsersUseCase)
    private readonly getAllUsersUseCase: GetAllUsersUseCase
  ) {}
  async run(): Promise<{ status: number; response: unknown }> {
    const response = await this.getAllUsersUseCase.execute();
    return {
      status: HttpCode.OK,
      response,
    };
  }
}
