import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../students/student.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany((type) => Student, (s) => s.class)
  students: Student[];
  constructor(name: string) {
          this.name = name;
  }
}
