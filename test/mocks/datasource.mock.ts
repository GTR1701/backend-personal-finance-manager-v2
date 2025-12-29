/* eslint-disable @typescript-eslint/no-unsafe-return */

export const mockRepositoryFactory = jest.fn(() => ({
  find: jest.fn((entity) => entity),
  findOne: jest.fn((entity) => entity),
  save: jest.fn((entity) => entity),
  create: jest.fn((entity) => entity),
  delete: jest.fn(() => ({ affected: 1 })),
  update: jest.fn(() => ({ affected: 1 })),
}));

export const mockDataSource = {
  createQueryRunner: jest.fn().mockReturnValue({
    connect: jest.fn(),
    startTransaction: jest.fn(),
    commitTransaction: jest.fn(),
    rollbackTransaction: jest.fn(),
    release: jest.fn(),
    manager: {
      save: jest.fn(),
    },
  }),
  getRepository: jest.fn().mockReturnValue(mockRepositoryFactory()),
};
