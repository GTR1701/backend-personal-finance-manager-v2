import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { IncomeTypeService } from "./income-type.service";

describe("IncomeTypeService", () => {
  let service: IncomeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomeTypeService],
    }).compile();

    service = module.get<IncomeTypeService>(IncomeTypeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
