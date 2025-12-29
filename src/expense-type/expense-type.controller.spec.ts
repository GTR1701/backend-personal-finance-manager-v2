import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { ExpenseTypeController } from "./expense-type.controller";
import { ExpenseType } from "./expense-type.entity";
import { ExpenseTypeService } from "./expense-type.service";

describe("ExpenseTypeController", () => {
  let controller: ExpenseTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTypeController],
      providers: [
        ExpenseTypeService,
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

    controller = module.get<ExpenseTypeController>(ExpenseTypeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
