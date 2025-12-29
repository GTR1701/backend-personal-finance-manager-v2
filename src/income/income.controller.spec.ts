import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { IncomeController } from "./income.controller";
import { Income } from "./income.entity";
import { IncomeService } from "./income.service";

describe("IncomeController", () => {
  let controller: IncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeController],
      providers: [
        IncomeService,
        {
          provide: getRepositoryToken(Income),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    controller = module.get<IncomeController>(IncomeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
