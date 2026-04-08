import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { IncomeDTO } from "./income.dto";
import { IncomeService } from "./income.service";

@Controller("income")
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  async getIncomes() {
    return this.incomeService.findAll();
  }

  @Get(":id")
  async getIncome(@Param(":id") incomeId: number) {
    return this.incomeService.findOne(incomeId);
  }

  @Post("create")
  createIncome(@Body() incomeBody: IncomeDTO[]) {
    return this.incomeService.create(incomeBody);
  }

  @Patch(":id")
  async updateIncome(
    @Param("id") incomeId: number,
    @Body() incomeBody: Partial<IncomeDTO>,
  ) {
    return this.incomeService.update(incomeId, incomeBody);
  }

  @Delete("delete/:id")
  async deleteIncome(@Param(":id") incomeId: number) {
    return this.incomeService.delete(incomeId);
  }
}
