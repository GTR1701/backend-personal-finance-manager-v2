import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { AccountTypeDTO } from "./account-type.dto";
import { AccountType } from "./account-type.entity";

@Injectable()
export class AccountTypeService {
  constructor(
    @InjectRepository(AccountType)
    readonly expenseRepository: Repository<AccountType>,
  ) {}

  async findAll(): Promise<AccountType[]> {
    return this.expenseRepository.find();
  }

  create(accountTypeBody: AccountTypeDTO[]) {
    return this.expenseRepository.create(accountTypeBody);
  }

  async update(
    accountTypeId: number,
    accountTypeBody: Partial<AccountTypeDTO>,
  ) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: accountTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.update(accountTypeId, accountTypeBody);
  }

  async delete(accountTypeId: number) {
    const entryExists = await this.expenseRepository.findOne({
      where: { id: accountTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.expenseRepository.delete(accountTypeId);
  }
}
