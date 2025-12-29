import { getTypeORMConfig } from "config/typeorm-config";

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExpenseTypeModule } from "./expense-type/expense-type.module";
import { ExpenseModule } from "./expense/expense.module";
import { IncomeTypeModule } from "./income-type/income-type.module";
import { IncomeModule } from "./income/income.module";
import { SubscriptionTypeModule } from "./subscription-type/subscription-type.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        getTypeORMConfig(configService),
    }),
    UserModule,
    ExpenseModule,
    IncomeModule,
    SubscriptionModule,
    ExpenseTypeModule,
    IncomeTypeModule,
    SubscriptionTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
