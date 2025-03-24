import { Module } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../students/student.entity';
import { StudentsController } from './students.controller';
import {ClassService} from "../classes/class.service";
import {Class} from "../classes/class.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Student, Class])],
  controllers: [StudentsController],
  providers: [StudentsService, ClassService],
})
export class StudentsModule {}
