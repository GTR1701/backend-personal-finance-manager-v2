import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { IncomeType } from "./income-type.entity";

@Injectable()
export class IncomeTypeService {
  constructor(
    @InjectRepository(IncomeType)
    readonly expenseRepository: Repository<IncomeType>,
  ) {}

  async findAll(): Promise<IncomeType[]> {
    return this.expenseRepository.find();
  }
}
