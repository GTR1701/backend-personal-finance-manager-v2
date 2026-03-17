import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { ExpenseDTO } from "./dto/expense.dto";
import { Expense } from "./expense.entity";

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    readonly expenseRepository: Repository<Expense>,
  ) {}

  async findAll() {
    return this.expenseRepository.find();
  }

  async findOne(expenseId: number) {
    const response = await this.expenseRepository.findOne({
      where: {
        id: expenseId,
      },
    });
    if (response == null) {
      return new NotFoundException();
    }

    return response;
  }

  create(expenseBody: ExpenseDTO[]) {
    return this.expenseRepository.create(expenseBody);
  }

  async update(expenseId: number, expenseBody: Partial<ExpenseDTO>) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: expenseId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.update(expenseId, expenseBody);
  }

  async delete(expenseId: number) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: expenseId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.delete(expenseId);
  }
}
