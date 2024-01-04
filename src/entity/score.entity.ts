import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @Column()
  id!: number;

  @Column({
      length: 50
  })
  subject!: string;

  @Column()
  score!: number;
}
