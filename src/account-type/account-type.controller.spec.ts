import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { AccountTypeController } from "./account-type.controller";
import { AccountType } from "./account-type.entity";
import { AccountTypeService } from "./account-type.service";

describe("ExpenseTypeController", () => {
  let controller: AccountTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountTypeController],
      providers: [
        AccountTypeService,
        {
          provide: getRepositoryToken(AccountType),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    controller = module.get<AccountTypeController>(AccountTypeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
