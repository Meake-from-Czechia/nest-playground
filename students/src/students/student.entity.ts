import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}