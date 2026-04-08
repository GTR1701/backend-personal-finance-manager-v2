import { Account } from "src/account/account.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 256 })
  name!: string;

  @Column("float")
  value!: number;

  @OneToMany(() => Account, (account) => account.currency)
  accounts!: Account[];
}
