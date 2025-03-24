import { Injectable } from '@nestjs/common';
import { Class } from './class.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassDto } from './class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private ClassRepository: Repository<Class>,
  ) {}

  getClasses(): Promise<Class[]> {
    return this.ClassRepository.find();
  }

  getClass(id: number): Promise<Class> {
    return this.ClassRepository.findOneBy({ id: id });
  }

  createClass(data: ClassDto): Promise<Class> {
    return this.ClassRepository.save(new Class(data.name));
  }

  async deleteClass(id: number): Promise<void> {
    await this.ClassRepository.delete(id);
  }

  async updateClass(id: number, data: ClassDto): Promise<Class> {
    const Class = await this.ClassRepository.findOneBy({ id: id });
    Class.name = data.name;
    return this.ClassRepository.save(Class);
  }
}
