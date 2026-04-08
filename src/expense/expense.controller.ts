import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { ExpenseDTO } from "./expense.dto";
import { ExpenseService } from "./expense.service";

@Controller("expense")
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  async getExpenses() {
    return this.expenseService.findAll();
  }

  @Get(":id")
  async getExpense(@Param(":id") expenseId: number) {
    return this.expenseService.findOne(expenseId);
  }

  @Post("create")
  createExpense(@Body() expenseBody: ExpenseDTO[]) {
    return this.expenseService.create(expenseBody);
  }

  @Patch(":id")
  async updateExpense(
    @Param("id") expenseId: number,
    @Body() expenseBody: Partial<ExpenseDTO>,
  ) {
    return this.expenseService.update(expenseId, expenseBody);
  }

  @Delete("delete/:id")
  async deleteExpense(@Param(":id") expenseId: number) {
    return this.expenseService.delete(expenseId);
  }
}
