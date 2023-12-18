import 'reflect-metadata';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository';
import { GetAllUsersUseCase } from '../../../domain/use-cases/get-all-users.usecases';

describe('GetAllUsersUseCasee', () => {
  let myUseCase: GetAllUsersUseCase;
  let mockRepository: jest.Mocked<UserRepositoryImpl>;

  beforeEach(() => {
    // Mock the UserRepositoryImpl and any required methods or behavior

    mockRepository = ({
      getAll: jest.fn().mockResolvedValue([
        {
          name: 'mock name',
          email: 'mock@email.com',
          phoneNumber: '+520000000000',
        },
      ]),
      connectDb: jest.fn(), // Mock the execute method
    } as unknown) as jest.Mocked<UserRepositoryImpl>;

    // Create an instance of MyController with the mocked use case
    myUseCase = new GetAllUsersUseCase(mockRepository);
  });

  it('should execute with correct get all user result', async () => {
    const result = await myUseCase.execute();
    const mockResponse = [
      {
        name: 'mock name',
        email: 'mock@email.com',
        phoneNumber: '+520000000000',
      },
    ];

    expect(result).toStrictEqual(mockResponse);
    // Add assertions 
    expect(mockRepository.connectDb).toHaveBeenCalled();
    expect(mockRepository.getAll).toHaveBeenCalled();
  });
});
