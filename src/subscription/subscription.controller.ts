import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { SubscriptionDTO } from "./subscription.dto";
import { SubscriptionService } from "./subscription.service";

@Controller("subscription")
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  async getSubscriptions() {
    return this.subscriptionService.findAll();
  }

  @Get(":id")
  async getSubscription(@Param(":id") subscriptionId: number) {
    return this.subscriptionService.findOne(subscriptionId);
  }

  @Post("create")
  createSubscription(@Body() subscriptionBody: SubscriptionDTO[]) {
    return this.subscriptionService.create(subscriptionBody);
  }

  @Patch(":id")
  async updateSubscription(
    @Param("id") subscriptionId: number,
    @Body() subscriptionBody: Partial<SubscriptionDTO>,
  ) {
    return this.subscriptionService.update(subscriptionId, subscriptionBody);
  }

  @Delete("delete/:id")
  async deleteSubscription(@Param(":id") subscriptionId: number) {
    return this.subscriptionService.delete(subscriptionId);
  }
}
