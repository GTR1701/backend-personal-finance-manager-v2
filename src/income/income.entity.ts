import { IncomeType } from "src/income-type/income-type.entity";
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
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number;

  @ManyToOne(() => User, (user) => user.incomes)
  user: User;

  @ManyToOne(() => IncomeType, (type) => type.incomes)
  incomeType: IncomeType;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
