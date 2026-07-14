import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { title } from 'process';

@Injectable()
export class TodosService {

    private todos = [
      { id: 1, title: '' },
      { id: 2, title: 'Build Todo API' }
    ];

    create(dto: CreateTodoDto){
        const newTodo = {
            id: this.todos.length +1,
            title: dto.title,
        };

        this.todos.push(newTodo);
        return newTodo;
    }
  findAll() {
        return this.todos;
    }
}
