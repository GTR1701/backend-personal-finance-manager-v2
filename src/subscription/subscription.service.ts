import { Repository } from "typeorm";

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { SubscriptionDTO } from "./subscription.dto";
import { Subscription } from "./subscription.entity";

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    readonly subscriptionRepository: Repository<Subscription>,
  ) {}

  async findAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  async findOne(subscriptionId: number) {
    const response = await this.subscriptionRepository.findOne({
      where: {
        id: subscriptionId,
      },
    });
    if (response == null) {
      return new NotFoundException();
    }

    return response;
  }

  create(subscriptionBody: SubscriptionDTO[]) {
    return this.subscriptionRepository.create(subscriptionBody);
  }

  async update(
    subscriptionId: number,
    subscriptionBody: Partial<SubscriptionDTO>,
  ) {
    const entryExists = await this.subscriptionRepository.findOne({
      where: { id: subscriptionId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.subscriptionRepository.update(
      subscriptionId,
      subscriptionBody,
    );
  }

  async delete(subscriptionId: number) {
    const entryExists = await this.subscriptionRepository.findOne({
      where: { id: subscriptionId },
    });
    if (entryExists == null) {
      return new NotFoundException();
    }

    return await this.subscriptionRepository.delete(subscriptionId);
  }
}
