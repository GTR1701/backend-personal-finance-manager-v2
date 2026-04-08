import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { ExpenseTypeDTO } from "./expense-type.dto";
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

  create(expenseTypeBody: ExpenseTypeDTO[]) {
    return this.expenseRepository.create(expenseTypeBody);
  }

  async update(
    expenseTypeId: number,
    expenseTypeBody: Partial<ExpenseTypeDTO>,
  ) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: expenseTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.update(expenseTypeId, expenseTypeBody);
  }

  async delete(expenseTypeId: number) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: expenseTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.delete(expenseTypeId);
  }
}
