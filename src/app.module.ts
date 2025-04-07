import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BalanceModule } from './balance/balance.module';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [UserModule, AuthModule, BalanceModule, IncomeModule, ExpenseModule, TypeModule],
  controllers: [AppController, AuthController],
  providers: [UserService, PrismaService, AuthService],
})
export class AppModule {}
