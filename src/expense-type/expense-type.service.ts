import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { ExpenseType } from "./expense-type.entity";

@Injectable()
export class ExpenseTypeService {
  constructor(
    @InjectRepository(ExpenseType)
    readonly expenseRepository: Repository<ExpenseType>,
  ) {}

  async findAll(): Promise<ExpenseType[]> {
    return this.expenseRepository.find();
  }
}
