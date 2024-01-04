import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  student_id!: number;

  @Column({
      length: 15
  })
  subject!: string;

  @Column()
  score!: number;

  @ManyToOne(() => Student, (student) => student.score)
  student: Student
}
