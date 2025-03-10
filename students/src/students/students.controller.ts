import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { Student } from '../students/student.entity';
import {StudentDto} from "./student.dto";

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentsService.getStudents();
  }

  @Post()
  createStudent(@Body() data: StudentDto ): Promise<Student> {
          console.log(data);
    return this.studentsService.createStudent(data);
  }
  @Delete(':id')
        deleteStudent(@Param('id') id: number): void {
          this.studentsService.deleteStudent(id);
  }
}
