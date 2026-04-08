import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { AccountDTO } from "./account.dto";
import { AccountService } from "./account.service";

@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async getExpenses() {
    return this.accountService.findAll();
  }

  @Get(":id")
  async getExpense(@Param(":id") expenseId: number) {
    return this.accountService.findOne(expenseId);
  }

  @Post("create")
  createExpense(@Body() expenseBody: AccountDTO[]) {
    return this.accountService.create(expenseBody);
  }

  @Patch(":id")
  async updateExpense(
    @Param("id") expenseId: number,
    @Body() expenseBody: Partial<AccountDTO>,
  ) {
    return this.accountService.update(expenseId, expenseBody);
  }

  @Delete("delete/:id")
  async deleteExpense(@Param(":id") expenseId: number) {
    return this.accountService.delete(expenseId);
  }
}
