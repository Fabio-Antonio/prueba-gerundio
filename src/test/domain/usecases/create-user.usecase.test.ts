import 'reflect-metadata';
import { CreateUserUseCase } from '../../../domain/use-cases/create-user.usecase';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';

describe('CreateUserUseCase', () => {
  let myUseCase: CreateUserUseCase;
  let mockRepository: jest.Mocked<UserRepositoryImpl>;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior

    // Create the mock CreateUserUseCase instance using the factory function
    mockRepository = ({
      register: jest.fn().mockResolvedValue({
        name: 'mock name',
        email: 'mock@email.com',
        phoneNumber: '+520000000000',
      }),
      connectDb: jest.fn(), // Mock the execute method
    } as unknown) as jest.Mocked<UserRepositoryImpl>;

    // Create an instance of MyController with the mocked use case
    myUseCase = new CreateUserUseCase(mockRepository);
  });

  it('should execute with correct created user result', async () => {
    // Mock request and response objects as needed for the controller method
    // Mock your request
    const mockRequest = {
      name: 'mock name',
      email: 'mock@email.com',
      phoneNumber: '+520000000000',
    };

    // Call the method to test from the controller
    const result = await myUseCase.execute(mockRequest);

    expect(result).toStrictEqual(mockRequest);
    // Add assertions or expectations based on the behavior you're testing
    expect(mockRepository.connectDb).toHaveBeenCalled();
    expect(mockRepository.register).toHaveBeenCalled();

    // Add other assertions as needed to validate the behavior
  });
});
