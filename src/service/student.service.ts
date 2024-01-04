import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/student.entity';
import { Score } from '../entity/score.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>
  ) { }

  async addStudent(student: Student) {
    const res = await this.studentRepository.save(student);

    for (let score of student['score']) {
      score['student_id'] = res['id'];
      this.scoreRepository.save(score);
    }
  }

  async getStudentList() {
    const students = await this.studentRepository.find();

    for (let [index, student] of students.entries()) {
      const score = await this.scoreRepository.find({
        where: {
          student_id: student['id']
        }
      });
      students[index]['score'] = score;
    }

    return students;
  }
}
