import { Controller, Get } from "@nestjs/common";

import { ExpenseService } from "./expense.service";

@Controller("expense")
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  async getExpenses() {
    return this.expenseService.findAll();
  }
}
