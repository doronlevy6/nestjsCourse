import {  Body, Controller ,Delete,Get, Param, Post,Patch, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { title } from 'process';
import { createTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}

    @Get()
  getTask(@Query(ValidationPipe) filterDto:GetTaskFilterDto):Task[]{
    console.log('\n filterDto',  filterDto,'\n');
    
   if(Object.keys(filterDto).length){
    return this.tasksService.getTaskWithFilters(filterDto)
   }else{
 return this.tasksService.getAllTasks()
   }
    
   

    }  
    @Get('/:id')
    getTaskById(@Param('id') id:string):Task{
        return this.tasksService.getTaskById(id)
    }
    @Post() 
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto:createTaskDto):Task{// @ Body('title') title:string,...
       
//         {title,description}=body
 return this.tasksService.createTask(createTaskDto)
    }
    @Delete('/:id')
    deleteTask(@Param('id') id:string):void{
        console.log('\n xxx',  id,'\n');
        
         this.tasksService.deleteTask(id)
         
    }
    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id:string, @Body('status',TaskStatusValidationPipe) status:TaskStatus):Task{
        console.log('\n status',  status,'\n');
        
     return   this.tasksService.updateTaskStatus(id,status)
    }
}
