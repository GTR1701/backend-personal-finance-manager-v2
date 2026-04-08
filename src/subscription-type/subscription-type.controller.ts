import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

import { SubscriptionTypeDTO } from "./subscription-type.dto";
import { SubscriptionTypeService } from "./subscription-type.service";

@Controller("subscription-type")
export class SubscriptionTypeController {
  constructor(
    private readonly subscriptionTypeService: SubscriptionTypeService,
  ) {}

  @Get()
  async getSubscriptionTypes() {
    return this.subscriptionTypeService.findAll();
  }

  @Post("create")
  createSubscriptionTypes(@Body() subscriptionTypeBody: SubscriptionTypeDTO[]) {
    return this.subscriptionTypeService.create(subscriptionTypeBody);
  }

  @Patch(":id")
  async updateSubscriptionType(
    @Param(":id") subscriptionTypeId: number,
    @Body() subscriptionTypeBody: Partial<SubscriptionTypeDTO>,
  ) {
    return this.subscriptionTypeService.update(
      subscriptionTypeId,
      subscriptionTypeBody,
    );
  }

  @Delete(":id")
  async deleteSubscriptionType(@Param(":id") subscriptionTypeId: number) {
    return this.subscriptionTypeService.delete(subscriptionTypeId);
  }
}
