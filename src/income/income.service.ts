import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { IncomeDTO } from "./income.dto";
import { Income } from "./income.entity";

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    readonly incomeRepository: Repository<Income>,
  ) {}

  async findAll(): Promise<Income[]> {
    return this.incomeRepository.find();
  }

  async findOne(incomeId: number) {
    const response = await this.incomeRepository.findOne({
      where: {
        id: incomeId,
      },
    });
    if (response == null) {
      return new NotFoundException();
    }

    return response;
  }

  create(incomeBody: IncomeDTO[]) {
    return this.incomeRepository.create(incomeBody);
  }

  async update(incomeId: number, incomeBody: Partial<IncomeDTO>) {
    const entryExists = await this.incomeRepository.findOne({
      where: { id: incomeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.incomeRepository.update(incomeId, incomeBody);
  }

  async delete(incomeId: number) {
    const entryExists = await this.incomeRepository.findOne({
      where: { id: incomeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.incomeRepository.delete(incomeId);
  }
}
