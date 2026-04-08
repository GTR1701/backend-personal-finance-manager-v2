import { Account } from "src/account/account.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class AccountType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @ManyToOne(() => Account, (account) => account.expenses)
  accounts: Account[];
}
