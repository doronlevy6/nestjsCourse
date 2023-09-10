import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';
import { TaskStatus } from './task.model';

@Entity()
export class Task1 extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}