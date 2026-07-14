import {Body, Controller, Get, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {

    constructor(
        private readonly todoservice: TodosService
    ){}

    @Get()
    findAll(){
        return this.todoservice.findAll();
    }

    @Post()
    create(@Body() dto: CreateTodoDto){
        return this.todoservice.create(dto);
    }
}
