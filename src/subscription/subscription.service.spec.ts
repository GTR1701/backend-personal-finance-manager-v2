import { Subscription } from "rxjs";
import {
  mockDataSource,
  mockRepositoryFactory,
} from "test/mocks/datasource.mock";
import { DataSource } from "typeorm";

import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { SubscriptionController } from "./subscription.controller";
import { SubscriptionService } from "./subscription.service";

describe("SubscriptionService", () => {
  let service: SubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [
        SubscriptionService,
        {
          provide: getRepositoryToken(Subscription),
          useFactory: mockRepositoryFactory,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<SubscriptionService>(SubscriptionService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
