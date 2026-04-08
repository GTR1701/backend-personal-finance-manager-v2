import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { CurrencyDTO } from "./currency.dto";
import { Currency } from "./currency.entity";

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    readonly currencyRepository: Repository<Currency>,
  ) {}

  async findAll() {
    return this.currencyRepository.find();
  }

  async findOne(currencyId: number) {
    const response = await this.currencyRepository.findOne({
      where: {
        id: currencyId,
      },
    });
    if (response == null) {
      return new NotFoundException();
    }

    return response;
  }

  create(currencyBody: CurrencyDTO[]) {
    return this.currencyRepository.create(currencyBody);
  }

  async update(currencyId: number, currencyBody: Partial<CurrencyDTO>) {
    const entryExists = await this.currencyRepository.findOne({
      where: { id: currencyId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.currencyRepository.update(currencyId, currencyBody);
  }

  async delete(currencyId: number) {
    const entryExists = await this.currencyRepository.findOne({
      where: { id: currencyId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.currencyRepository.delete(currencyId);
  }
}
