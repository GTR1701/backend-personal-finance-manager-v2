import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { SubscriptionTypeController } from "./subscription-type.controller";
import { SubscriptionType } from "./subscription-type.entity";
import { SubscriptionTypeService } from "./subscription-type.service";

describe("SubscriptionTypeService", () => {
  let service: SubscriptionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionTypeController],
      providers: [
        SubscriptionTypeService,
        {
          provide: getRepositoryToken(SubscriptionType),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<SubscriptionTypeService>(SubscriptionTypeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
