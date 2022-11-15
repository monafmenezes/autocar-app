import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("cars")
export class User {
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

  @CreateDateColumn({ type: "timestamp" })
  created: Date;

  @Column()
  photo: string;
}
