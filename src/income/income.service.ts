import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Income } from "./income.entity";

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    readonly expenseRepository: Repository<Income>,
  ) {}

  async findAll(): Promise<Income[]> {
    return this.expenseRepository.find();
  }
}
