import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Expense } from "./expense.entity";

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    readonly expenseRepository: Repository<Expense>,
  ) {}

  async findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }
}
