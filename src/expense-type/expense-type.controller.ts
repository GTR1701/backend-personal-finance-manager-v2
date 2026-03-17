import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { ExpenseTypeDTO } from "./expense-type.dto";
import { ExpenseTypeService } from "./expense-type.service";

@Controller("expense-type")
export class ExpenseTypeController {
  constructor(private readonly expenseTypeService: ExpenseTypeService) {}

  @Get()
  async getExpenseTypes() {
    return this.expenseTypeService.findAll();
  }

  @Post("create")
  createExpenseTypes(@Body() expenseTypeBody: ExpenseTypeDTO[]) {
    return this.expenseTypeService.create(expenseTypeBody);
  }

  @Patch(":id")
  async updateExpenseType(
    @Param(":id") expenseTypeId: number,
    @Body() expenseTypeBody: Partial<ExpenseTypeDTO>,
  ) {
    return this.expenseTypeService.update(expenseTypeId, expenseTypeBody);
  }

  @Delete(":id")
  async deleteExpenseType(@Param(":id") expenseTypeId: number) {
    return this.expenseTypeService.delete(expenseTypeId);
  }
}
