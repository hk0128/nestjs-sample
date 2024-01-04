import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Score } from './score.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
      length: 50
  })
  name!: string;

  @Column()
  age!: number;

  @OneToMany(() => Score, (score) => score.student)
  score: Score[]
}
