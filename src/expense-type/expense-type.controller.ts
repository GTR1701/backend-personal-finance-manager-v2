import { Controller, Get } from "@nestjs/common";

import { ExpenseTypeService } from "./expense-type.service";

@Controller("expense-type")
export class ExpenseTypeController {
  constructor(private readonly expenseTypeService: ExpenseTypeService) {}

  @Get()
  async getExpenses() {
    return this.expenseTypeService.findAll();
  }
}
