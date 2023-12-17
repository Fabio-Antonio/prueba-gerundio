import 'reflect-metadata';
import { Container } from 'inversify';
import { CreateUserController } from '../controllers/create-user.controller';
import { TYPES } from '../../types';
import { CreateUserUseCase } from '../../domain/use-cases/create-user.usecase';

import { UserRepositoryImpl } from '../repositories/user.repository';
import UserModel from '../mongoose/schemas/user.schema';
import { Document, Model } from 'mongoose';
import MongooseRepository from '../mongoose/mongoose.repository';
import { IUserDocument } from '../mongoose/schemas/user.schema';
import { GetAllUsersUseCase } from '../../domain/use-cases/get-all-users.usecases';
import { GetAllUsersUserController } from '../controllers/get-users-Controller';
import { UpdateParcialUserController } from '../controllers/update-parcial.controller';
import { UpdateParcialUserUseCase } from '../../domain/use-cases/update-parcial-user';
import { DeleteUserByEmailController } from '../controllers/delete-user-by-email.controller';
import { DeleteUserByEmailUseCase } from '../../domain/use-cases/delete-user-by-email.usecase';

const container = new Container();

container
  .bind<CreateUserController>(TYPES.CreateUserController)
  .to(CreateUserController);
container
  .bind<GetAllUsersUserController>(TYPES.GetAllUsersUserController)
  .to(GetAllUsersUserController);
container
  .bind<UpdateParcialUserController>(TYPES.UpdateParcialUserController)
  .to(UpdateParcialUserController);
container
  .bind<DeleteUserByEmailController>(TYPES.DeleteUserByEmailController)
  .to(DeleteUserByEmailController);
container
  .bind<DeleteUserByEmailUseCase>(TYPES.DeleteUserByEmailUseCase)
  .to(DeleteUserByEmailUseCase);
container
  .bind<UpdateParcialUserUseCase>(TYPES.UpdateParcialUserUseCase)
  .to(UpdateParcialUserUseCase);
container
  .bind<CreateUserUseCase>(TYPES.CreateUserUseCase)
  .to(CreateUserUseCase);
container
  .bind<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase)
  .to(GetAllUsersUseCase);

container
  .bind<UserRepositoryImpl>(TYPES.UserRepositoryImpl)
  .to(UserRepositoryImpl);

container.bind<Model<IUserDocument>>('UserModel').toConstantValue(UserModel);

export { container };
