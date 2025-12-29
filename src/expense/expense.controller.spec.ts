import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { ExpenseController } from "./expense.controller";
import { Expense } from "./expense.entity";
import { ExpenseService } from "./expense.service";

describe("ExpenseController", () => {
  let controller: ExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseController],
      providers: [
        ExpenseService,
        {
          provide: getRepositoryToken(Expense),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    controller = module.get<ExpenseController>(ExpenseController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
