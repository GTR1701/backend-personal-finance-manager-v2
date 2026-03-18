import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { IncomeTypeDTO } from "./income-type.dto";
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

  create(incomeTypeBody: IncomeTypeDTO[]) {
    return this.expenseRepository.create(incomeTypeBody);
  }

  async update(incomeTypeId: number, incomeTypeBody: Partial<IncomeTypeDTO>) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: incomeTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.update(incomeTypeId, incomeTypeBody);
  }

  async delete(incomeTypeId: number) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: incomeTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.delete(incomeTypeId);
  }
}
