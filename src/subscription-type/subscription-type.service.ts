import { Repository } from "typeorm";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { SubscriptionType } from "./subscription-type.entity";

@Injectable()
export class SubscriptionTypeService {
  constructor(
    @InjectRepository(SubscriptionType)
    readonly expenseRepository: Repository<SubscriptionType>,
  ) {}

  async findAll(): Promise<SubscriptionType[]> {
    return this.expenseRepository.find();
  }
}
