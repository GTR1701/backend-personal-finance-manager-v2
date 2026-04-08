import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { AccountController } from "./account.controller";
import { Account } from "./account.entity";
import { AccountService } from "./account.service";

describe("ExpenseController", () => {
  let controller: AccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        AccountService,
        {
          provide: getRepositoryToken(Account),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
