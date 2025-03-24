import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './class.entity';
import { ClassesController } from './classes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  controllers: [ClassesController],
  providers: [ClassService],
})
export class ClassModule {}
