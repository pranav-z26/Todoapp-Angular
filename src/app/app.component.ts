import { Component } from '@angular/core';
import { Todo } from './models/todo/todo.module';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo Manager';
  todo:Todo = new Todo();

  constructor(private todoService: TodoService) {
    console.log(this.listTodo);
  }

  listTodo: Array<Todo> = [];

  addTodo() {
    console.log('Inside addTodo method');
    this.listTodo.push(this.todo);
    this.todo = new Todo();
    this.todoService.getData()

  }

}
