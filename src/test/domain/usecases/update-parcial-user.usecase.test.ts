import 'reflect-metadata';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { UpdateParcialUserUseCase } from '../../../domain/use-cases/update-parcial-user';

describe('UpdateParcialUserUseCase', () => {
  let myUseCase: UpdateParcialUserUseCase;
  let mockRepository: jest.Mocked<UserRepositoryImpl>;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior

    mockRepository = ({
      updateByEmail: jest.fn().mockResolvedValue({
        name: 'mock name',
        email: 'mock@email.com',
        phoneNumber: '+520000000000',
      }),
      connectDb: jest.fn(), // Mock the execute method
    } as unknown) as jest.Mocked<UserRepositoryImpl>;

    // Create an instance of MyController with the mocked use case
    myUseCase = new UpdateParcialUserUseCase(mockRepository);
  });

  it('should execute with correct parcial update user by email result', async () => {
    // Mock your request
    const mockRequest = {
      name: 'mock name',
      email: 'mock@email.com',
      phoneNumber: '+520000000000',
    };

    // Call the method to test from the controller
    const result = await myUseCase.execute(mockRequest);

    expect(result).toStrictEqual(mockRequest);
    // Add assertions
    expect(mockRepository.connectDb).toHaveBeenCalled();
    expect(mockRepository.updateByEmail).toHaveBeenCalled();
  });
});
