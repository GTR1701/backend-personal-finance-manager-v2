import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { ExpenseTypeController } from "./account-type.controller";
import { ExpenseType } from "./account-type.entity";
import { AccountTypeService } from "./account-type.service";

describe("ExpenseTypeService", () => {
  let service: AccountTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTypeController],
      providers: [
        AccountTypeService,
        {
          provide: getRepositoryToken(ExpenseType),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<AccountTypeService>(AccountTypeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
