import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) { }

  async addStudent(Student: Student) {
    this.studentRepository.save(Student);
  }

  async getStudentList() {
    return await this.studentRepository.find();
  }
}