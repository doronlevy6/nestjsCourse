import { TaskStatus } from "../task.model"
import {IsOptional, IsIn, IsNotEmpty} from 'class-validator'
export class GetTaskFilterDto{
    @IsOptional()
     @IsIn([TaskStatus.OPEN,TaskStatus.IN_PROGRES,TaskStatus.DONE])
    status:TaskStatus;
    @IsOptional()
    @IsNotEmpty()
    search:string;
}