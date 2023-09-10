import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task1 } from './task.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Task1])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
/*
////all commands:
npm install -g @nestjs/cli
nest new meir
npm install --save-dev nodemon
npm install --save-dev ts-node 
 npm run start:dev
nest g module tasks 
nest g controller tasks --no-spec
nest g service tasks --no-spec
npm install --save uuid

pipes:
npm install class-validator class-transformer --save

pg+typeorm:
npm i --save @nestjs/typeorm typeorm pg
*/