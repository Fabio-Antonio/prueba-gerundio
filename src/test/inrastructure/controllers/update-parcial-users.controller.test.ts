import 'reflect-metadata';
import { CreateUserController } from '../../../infrastructure/controllers/create-user.controller';
import { CreateUserUseCase } from '../../../domain/use-cases/create-user.usecase';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { Request, Response } from 'express';
import { UpdateParcialUserController } from '../../../infrastructure/controllers/update-parcial.controller';
import { UpdateParcialUserUseCase } from '../../../domain/use-cases/update-parcial-user';

describe('UpateParcialUserController', () => {
  let myController: UpdateParcialUserController;
  let mockUseCase: jest.Mocked<UpdateParcialUserUseCase>;
  let mockUserRepository: UserRepositoryImpl;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior
    mockUserRepository = {} as UserRepositoryImpl;

    // Create the mock UseCase
    mockUseCase = ({
      execute: jest.fn().mockResolvedValue({
        name: 'mock name',
        email: 'mock@email.com',
        phoneNumber: '+520000000000',
      }), // Mock the execute method
      userRepositoryImpl: mockUserRepository, // Provide the mocked repository
    } as unknown) as jest.Mocked<UpdateParcialUserUseCase>;

    // Create an instance of MyController with the mocked use case
    myController = new UpdateParcialUserController(mockUseCase);
  });

  it('should execute with correct created user result', async () => {
    // Mock your request
    const mockRequest = {
      body: {
        name: 'mock name',
        email: 'mock@email.com',
        phoneNumber: '+520000000000',
      },
    } as Request;
    const mockResponse = {
      status: 200,
      response: {
        name: 'mock name',
        email: 'mock@email.com',
        phoneNumber: '+520000000000',
      },
    }; 

    // Call the method to test from the controller
    const result = await myController.run(mockRequest);

    expect(result).toStrictEqual(mockResponse);
    // Add assertions
    expect(mockUseCase.execute).toHaveBeenCalled();
  });
});
