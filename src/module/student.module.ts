import { Module } from '@nestjs/common';
import { Student } from '../entity/student.entity';
import { Score } from '../entity/score.entity';
import { StudentController } from '../controller/student.controller';
import { StudentService } from '../service/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forFeature([Score])
  ],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
