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

describe("IncomeService", () => {
  let service: IncomeService;

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

    service = module.get<IncomeService>(IncomeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
