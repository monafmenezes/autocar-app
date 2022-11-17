import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  model: string;

  @Column()
  mark: string;

  @Column()
  year: string;

  @Column()
  km: number;

  @Column()
  price: number;

  @CreateDateColumn({ type: "timestamp" })
  created: Date;

  @Column()
  photo: string;
}
