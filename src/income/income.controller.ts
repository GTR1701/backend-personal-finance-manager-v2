import { Controller, Get } from "@nestjs/common";

import { IncomeService } from "./income.service";

@Controller("income")
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  async getExpenses() {
    return this.incomeService.findAll();
  }
}
