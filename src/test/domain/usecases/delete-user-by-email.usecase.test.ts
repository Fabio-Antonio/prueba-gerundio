import 'reflect-metadata';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { DeleteUserByEmailUseCase } from '../../../domain/use-cases/delete-user-by-email.usecase';

describe('DeleteUserByEmailUseCase', () => {
  let myUseCase: DeleteUserByEmailUseCase;
  let mockRepository: jest.Mocked<UserRepositoryImpl>;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior
    mockRepository = ({
      deleteByEmail: jest.fn().mockResolvedValue(undefined),
      connectDb: jest.fn(), // Mock the execute method
    } as unknown) as jest.Mocked<UserRepositoryImpl>;

    // Create an instance of MyController with the mocked use case
    myUseCase = new DeleteUserByEmailUseCase(mockRepository);
  });

  it('should execute with correct delete user result', async () => {
    // Mock your request
    const mockRequest = 'mock@email.com';

    // Call the method to test from the controller
    const result = await myUseCase.execute(mockRequest);

    expect(result).toStrictEqual(undefined);
    // Add assertions
    expect(mockRepository.connectDb).toHaveBeenCalled();
    expect(mockRepository.deleteByEmail).toHaveBeenCalled();
  });
});
