const TYPES = {
  CreateUserController: Symbol.for('CreateUserController'),
  CreateUserUseCase: Symbol.for('CreateUserUseCase'),
  UserRepositoryImpl: Symbol.for('UserRepositoryImpl'),
  MongooseRepository: Symbol.for('MongooseRepository'),
  GetAllUsersUseCase: Symbol.for('GetAllUsersUseCase'),
  GetAllUsersUserController: Symbol.for('GetAllUsersUserController'),
  UpdateParcialUserController: Symbol.for('UpdateParcialUserController'),
  UpdateParcialUserUseCase: Symbol.for('UpdateParcialUserUseCase'),
  DeleteUserByEmailController: Symbol.for('DeleteUserByEmailController'),
  DeleteUserByEmailUseCase: Symbol.for('DeleteUserByEmailUseCase'),
};

export { TYPES };
