import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from '../students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../students/student.entity';

import { ClassModule } from '../classes/class.module';
import { Class } from '../classes/class.entity';

@Module({
  imports: [
    StudentsModule,
    ClassModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysqlstudenti.litv.sssvt.cz',
      port: 3306,
      username: 'mikmichal',
      password: '123456',
      database: '4c2_mikmichal_db1',
      entities: [Class, Student],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
