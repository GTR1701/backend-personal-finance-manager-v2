import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IncomeTypeController } from "./income-type.controller";
import { IncomeType } from "./income-type.entity";
import { IncomeTypeService } from "./income-type.service";

@Module({
  imports: [TypeOrmModule.forFeature([IncomeType])],
  controllers: [IncomeTypeController],
  providers: [IncomeTypeService],
})
export class IncomeTypeModule {}
