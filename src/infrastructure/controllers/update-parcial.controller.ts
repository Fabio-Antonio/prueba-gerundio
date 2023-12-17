import { Controller } from '../../presentation/http/controller/controller';
import { inject, injectable } from 'inversify';
import { Request } from 'express';
import { TYPES } from '../../types';
import { HttpCode } from '../../domain/interfaces/configurations.interfaces';
import { UpdateParcialUserUseCase } from '../../domain/use-cases/update-parcial-user';

@injectable()
export class UpdateParcialUserController implements Controller {
  constructor(
    @inject(TYPES.UpdateParcialUserUseCase)
    private readonly updateParcialUserUseCase: UpdateParcialUserUseCase
  ) {}
  async run(req: Request): Promise<{ status: number; response: unknown }> {
    const body = req.body;
    const response = await this.updateParcialUserUseCase.execute(body);
    return {
      status: HttpCode.OK,
      response,
    };
  }
}
