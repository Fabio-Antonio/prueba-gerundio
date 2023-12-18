import 'reflect-metadata';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { Request } from 'express';
import { DeleteUserByEmailController } from '../../../infrastructure/controllers/delete-user-by-email.controller';
import { DeleteUserByEmailUseCase } from '../../../domain/use-cases/delete-user-by-email.usecase';

describe('DeleteUserByEmailController', () => {
  let myController: DeleteUserByEmailController;
  let mockUseCase: jest.Mocked<DeleteUserByEmailUseCase>;
  let mockUserRepository: UserRepositoryImpl;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior
    mockUserRepository = {} as UserRepositoryImpl;

    // Create the mock UseCase
    mockUseCase = ({
      execute: jest.fn().mockResolvedValue(undefined), // Mock the execute method
      userRepositoryImpl: mockUserRepository, // Provide the mocked repository
    } as unknown) as jest.Mocked<DeleteUserByEmailUseCase>;

    // Create an instance of MyController with the mocked use case
    myController = new DeleteUserByEmailController(mockUseCase);
  });

  it('should execute with correct Delete user result', async () => {
    // Mock your request
    const mockRequest = ({
      params: {
        email: 'mock@email.com',
      },
    } as unknown) as Request;

    const mockResponse = {
      status: 200,
      response: undefined,
    }; // Mock your response

    // Call the method to test from the controller
    const result = await myController.run(mockRequest);

    expect(result).toStrictEqual(mockResponse);
    // Add assertions
    expect(mockUseCase.execute).toHaveBeenCalled();
  });
});
