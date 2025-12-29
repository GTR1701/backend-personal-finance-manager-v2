import { Controller, Get } from "@nestjs/common";

import { SubscriptionTypeService } from "./subscription-type.service";

@Controller("subscription-type")
export class SubscriptionTypeController {
  constructor(
    private readonly subscriptionTypeService: SubscriptionTypeService,
  ) {}

  @Get()
  async getExpenses() {
    return this.subscriptionTypeService.findAll();
  }
}
