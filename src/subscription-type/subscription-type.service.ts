import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { SubscriptionTypeDTO } from "./subscription-type.dto";
import { SubscriptionType } from "./subscription-type.entity";

@Injectable()
export class SubscriptionTypeService {
  constructor(
    @InjectRepository(SubscriptionType)
    readonly subscriptionRepository: Repository<SubscriptionType>,
  ) {}

  async findAll(): Promise<SubscriptionType[]> {
    return this.subscriptionRepository.find();
  }

  create(subscriptionTypeBody: SubscriptionTypeDTO[]) {
    return this.subscriptionRepository.create(subscriptionTypeBody);
  }

  async update(
    subscriptionTypeId: number,
    subscriptionTypeBody: Partial<SubscriptionTypeDTO>,
  ) {
    const entryExists = await this.subscriptionRepository.findOne({
      where: { id: subscriptionTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.subscriptionRepository.update(
      subscriptionTypeId,
      subscriptionTypeBody,
    );
  }

  async delete(subscriptionTypeId: number) {
    const entryExists = await this.subscriptionRepository.findOne({
      where: { id: subscriptionTypeId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.subscriptionRepository.delete(subscriptionTypeId);
  }
}
