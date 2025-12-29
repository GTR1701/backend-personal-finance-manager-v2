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

describe("ExpenseTypeService", () => {
  let service: ExpenseTypeService;

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

    service = module.get<ExpenseTypeService>(ExpenseTypeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
