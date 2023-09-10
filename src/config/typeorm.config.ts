import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { truncateSync } from "fs";

export const typeOrmConfig :TypeOrmModuleOptions={
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'postgres',
    database:'taskmanangement',
    entities:[__dirname + '/../**/ *.entity.ts'],
    synchronize:true,
}