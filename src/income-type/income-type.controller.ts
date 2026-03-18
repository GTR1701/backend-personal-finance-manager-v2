import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { IncomeTypeDTO } from "./income-type.dto";
import { IncomeTypeService } from "./income-type.service";

@Controller("income-type")
export class IncomeTypeController {
  constructor(private readonly incomeTypeService: IncomeTypeService) {}

  @Get()
  async getIncomeTypes() {
    return this.incomeTypeService.findAll();
  }

  @Post("create")
  createIncomeTypes(@Body() incomeTypeBody: IncomeTypeDTO[]) {
    return this.incomeTypeService.create(incomeTypeBody);
  }

  @Patch(":id")
  async updateIncomeType(
    @Param(":id") incomeTypeId: number,
    @Body() incomeTypeBody: Partial<IncomeTypeDTO>,
  ) {
    return this.incomeTypeService.update(incomeTypeId, incomeTypeBody);
  }

  @Delete(":id")
  async deleteIncomeType(@Param(":id") incomeTypeId: number) {
    return this.incomeTypeService.delete(incomeTypeId);
  }
}
