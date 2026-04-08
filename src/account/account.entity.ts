import { AccountType } from "src/account-type/account-type.entity";
import { Currency } from "src/currency/currency.entity";
import { Expense } from "src/expense/expense.entity";
import { Income } from "src/income/income.entity";
import { Subscription } from "src/subscription/subscription.entity";
import { User } from "src/user/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @ManyToOne(() => Currency, (currency) => currency.accounts)
  currency: Currency;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @OneToMany(() => Expense, (expense) => expense.account)
  expenses: Expense[];

  @OneToMany(() => Income, (income) => income.account)
  incomes: Income[];

  @OneToMany(() => Subscription, (subscription) => subscription.account)
  subscriptions: Subscription[];

  @ManyToOne(() => AccountType, (type) => type.accounts)
  AccountType: AccountType;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
