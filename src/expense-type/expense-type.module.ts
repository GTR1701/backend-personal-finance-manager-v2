import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ExpenseTypeController } from "./expense-type.controller";
import { ExpenseType } from "./expense-type.entity";
import { ExpenseTypeService } from "./expense-type.service";

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseType])],
  controllers: [ExpenseTypeController],
  providers: [ExpenseTypeService],
})
export class ExpenseTypeModule {}
