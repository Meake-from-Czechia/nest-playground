import { Module } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../students/student.entity';
import {StudentsController} from "./students.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
