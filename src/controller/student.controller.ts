import { Body, Controller, Get, Post } from '@nestjs/common';
import { Student } from '../entity/student.entity';
import { StudentService } from '../service/student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly service: StudentService) { }

  @Post()
  async createStudent(@Body() student: Student) {
    await this.service.addStudent(student);
  }

  @Get()
  async getStudentList() {
    return await this.service.getStudentList();
  }
}