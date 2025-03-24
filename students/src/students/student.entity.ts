import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from '../classes/class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @ManyToOne((type) => Class, (s) => s.students, {
    nullable: false,
  })
  class: Class;

  constructor(firstName: string, lastName: string, _class: Class) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.class = _class;
  }
}
