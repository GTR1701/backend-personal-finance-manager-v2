import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SubscriptionTypeController } from "./subscription-type.controller";
import { SubscriptionType } from "./subscription-type.entity";
import { SubscriptionTypeService } from "./subscription-type.service";

@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionType])],
  controllers: [SubscriptionTypeController],
  providers: [SubscriptionTypeService],
})
export class SubscriptionTypeModule {}
