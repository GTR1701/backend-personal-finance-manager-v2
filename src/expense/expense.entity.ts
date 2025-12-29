import { ExpenseType } from "src/expense-type/expense-type.entity";
import { User } from "src/user/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @ManyToOne(() => ExpenseType, (type) => type.expenses)
  expenseType: ExpenseType;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
