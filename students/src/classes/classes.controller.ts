import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassDto } from './class.dto';
import { Class } from './class.entity';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  getClasses(): Promise<Class[]> {
    return this.classService.getClasses();
  }

  @Get(':id')
  getClass(@Param('id') classId: number): Promise<Class> {
    return this.classService.getClass(classId);
  }

  @Post()
  createClass(@Body() data: ClassDto): Promise<Class> {
    console.log(data);
    return this.classService.createClass(data);
  }

  @Delete(':id')
  async deleteClass(@Param('id') id: number): Promise<void> {
    await this.classService.deleteClass(id);
  }

  @Put(':id')
  updateClass(
    @Param('id')
    classId: number,
    @Body() data: ClassDto,
  ): Promise<Class> {
    return this.classService.updateClass(classId, data);
  }
}
