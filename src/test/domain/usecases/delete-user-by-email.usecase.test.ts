import 'reflect-metadata';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { DeleteUserByEmailUseCase } from '../../../domain/use-cases/delete-user-by-email.usecase';

describe('DeleteUserByEmailUseCase', () => {
  let myUseCase: DeleteUserByEmailUseCase;
  let mockRepository: jest.Mocked<UserRepositoryImpl>;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior

    // Create the mock CreateUserUseCase instance using the factory function
    mockRepository = ({
      deleteByEmail: jest.fn().mockResolvedValue(undefined),
      connectDb: jest.fn(), // Mock the execute method
    } as unknown) as jest.Mocked<UserRepositoryImpl>;

    // Create an instance of MyController with the mocked use case
    myUseCase = new DeleteUserByEmailUseCase(mockRepository);
  });

  it('should execute with correct delete user result', async () => {
    // Mock request and response objects as needed for the controller method
    // Mock your request
    const mockRequest = 'mock@email.com';

    // Call the method to test from the controller
    const result = await myUseCase.execute(mockRequest);

    expect(result).toStrictEqual(undefined);
    // Add assertions or expectations based on the behavior you're testing
    expect(mockRepository.connectDb).toHaveBeenCalled();
    expect(mockRepository.deleteByEmail).toHaveBeenCalled();

    // Add other assertions as needed to validate the behavior
  });
});
