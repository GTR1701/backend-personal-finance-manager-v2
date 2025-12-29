import { Controller, Get } from "@nestjs/common";

import { IncomeTypeService } from "./income-type.service";

@Controller("income-type")
export class IncomeTypeController {
  constructor(private readonly incomeTypeService: IncomeTypeService) {}

  @Get()
  async getExpenses() {
    return this.incomeTypeService.findAll();
  }
}
