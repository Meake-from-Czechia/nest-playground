import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  getStudent(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ id: id });
  }

  createStudent(data: StudentDto): Promise<Student> {
    return this.studentRepository.save(
      new Student(data.firstName, data.lastName),
    );
  }

  deleteStudent(id: number): void {
    this.studentRepository.delete(id);
  }

  async updateStudent(id: number, data: StudentDto): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ id: id });
    student.firstName = data.firstName;
    student.lastName = data.lastName;
    return this.studentRepository.save(student);
  }
}
