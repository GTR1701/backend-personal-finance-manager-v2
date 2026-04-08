import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { AccountDTO } from "./account.dto";
import { Account } from "./account.entity";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    readonly accountRepository: Repository<Account>,
  ) {}

  async findAll() {
    return this.accountRepository.find();
  }

  async findOne(accountId: number) {
    const response = await this.accountRepository.findOne({
      where: {
        id: accountId,
      },
    });
    if (response == null) {
      return new NotFoundException();
    }

    return response;
  }

  create(accountBody: AccountDTO[]) {
    return this.accountRepository.create(accountBody);
  }

  async update(accountId: number, accountBody: Partial<AccountDTO>) {
    const entryExists = await this.accountRepository.findOne({
      where: { id: accountId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.accountRepository.update(accountId, accountBody);
  }

  async delete(accountId: number) {
    const entryExists = await this.accountRepository.findOne({
      where: { id: accountId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.accountRepository.delete(accountId);
  }
}
