import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { IncomeTypeController } from "./income-type.controller";
import { IncomeType } from "./income-type.entity";
import { IncomeTypeService } from "./income-type.service";

describe("IncomeTypeController", () => {
  let controller: IncomeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeTypeController],
      providers: [
        IncomeTypeService,
        {
          provide: getRepositoryToken(IncomeType),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    controller = module.get<IncomeTypeController>(IncomeTypeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
