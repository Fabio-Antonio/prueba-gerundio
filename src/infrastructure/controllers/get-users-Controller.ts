import { Controller } from '../../presentation/http/controller/controller';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../types';
import { HttpCode } from '../../domain/interfaces/configurations.interfaces';
import { GetAllUsersUseCase } from '../../domain/use-cases/get-all-users.usecases';

//Get all users controller injecting get all users usecase
@injectable()
export class GetAllUsersUserController implements Controller {
  constructor(
    @inject(TYPES.GetAllUsersUseCase)
    private readonly getAllUsersUseCase: GetAllUsersUseCase
  ) {}
  // Run async method run to get response from usecase

  async run(): Promise<{ status: number; response: unknown }> {
    const response = await this.getAllUsersUseCase.execute();
    return {
      status: HttpCode.OK,
      response,
    };
  }
}
