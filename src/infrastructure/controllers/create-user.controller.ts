import { Controller } from '../../presentation/http/controller/controller';
import { inject, injectable } from 'inversify';
import { Request } from 'express';
import { TYPES } from '../../types';
import { CreateUserUseCase } from '../../domain/use-cases/create-user.usecase';
import { HttpCode } from '../../domain/interfaces/configurations.interfaces';

//Create user controller injecting create user usecase
@injectable()
export class CreateUserController implements Controller {
  constructor(
    @inject(TYPES.CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase
  ) {}
  // Run async method to get response from usecase
  async run(req: Request): Promise<{ status: number; response: unknown }> {
    const body = req.body;
    const response = await this.createUserUseCase.execute(body);
    return {
      status: HttpCode.OK_Create,
      response,
    };
  }
}
