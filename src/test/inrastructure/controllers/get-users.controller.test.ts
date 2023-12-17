import 'reflect-metadata';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { GetAllUsersUserController } from '../../../infrastructure/controllers/get-users-Controller';
import { GetAllUsersUseCase } from '../../../domain/use-cases/get-all-users.usecases';

describe('GetAllUsersUserController', () => {
  let myController: GetAllUsersUserController;
  let mockUseCase: jest.Mocked<GetAllUsersUseCase>;
  let mockUserRepository: UserRepositoryImpl;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior
    mockUserRepository = {} as UserRepositoryImpl;

    // Create the mock CreateUserUseCase instance using the factory function
    mockUseCase = ({
      execute: jest.fn().mockResolvedValue([
        {
          name: 'mock name',
          email: 'mock@email.com',
          phoneNumber: '+520000000000',
        },
        {
          name: 'mock name',
          email: 'mock@email.com',
          phoneNumber: '+520000000000',
        },
      ]), // Mock the execute method
      userRepositoryImpl: mockUserRepository, // Provide the mocked repository
    } as unknown) as jest.Mocked<GetAllUsersUseCase>;

    // Create an instance of MyController with the mocked use case
    myController = new GetAllUsersUserController(mockUseCase);
  });

  it('should execute with correct all users result', async () => {
    // Mock request and response objects as needed for the controller method
    // Mock your request

    const mockResponse = {
      status: 200,
      response: [
        {
          name: 'mock name',
          email: 'mock@email.com',
          phoneNumber: '+520000000000',
        },
        {
          name: 'mock name',
          email: 'mock@email.com',
          phoneNumber: '+520000000000',
        },
      ],
    }; // Mock your response

    // Call the method to test from the controller
    const result = await myController.run();

    expect(result).toStrictEqual(mockResponse);
    // Add assertions or expectations based on the behavior you're testing
    expect(mockUseCase.execute).toHaveBeenCalled();
    // Add other assertions as needed to validate the behavior
  });
});
