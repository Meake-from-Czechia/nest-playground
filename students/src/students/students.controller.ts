import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { Student } from '../students/student.entity';
import { StudentDto } from './student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentsService.getStudents();
  }

  @Get(':id')
  getStudent(@Param('id') studentId: number): Promise<Student> {
    return this.studentsService.getStudent(studentId);
  }

  @Post()
  createStudent(@Body() data: StudentDto): Promise<Student> {
    console.log(data);
    return this.studentsService.createStudent(data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number): Promise<void> {
    await this.studentsService.deleteStudent(id);
  }

  @Put(':id')
  updateStudent(
    @Param('id')
    studentId: number,
    @Body() data: StudentDto,
  ): Promise<Student> {
    return this.studentsService.updateStudent(studentId, data);
  }
}
