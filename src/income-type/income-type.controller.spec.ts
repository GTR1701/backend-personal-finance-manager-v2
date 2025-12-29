import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { IncomeTypeController } from "./income-type.controller";

describe("IncomeTypeController", () => {
  let controller: IncomeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeTypeController],
    }).compile();

    controller = module.get<IncomeTypeController>(IncomeTypeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
