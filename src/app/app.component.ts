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
  listTodo: Array<Todo> = [];
  todo:Todo = new Todo();

  constructor(private todoService: TodoService) {
    // console.log(this.listTodo);
    todoService.getTodos().subscribe(data => this.listTodo = [...data])
  }


  addTodo() {
    console.log('Inside addTodo method');
    this.listTodo.push(this.todo);

    this.todoService.addTodo(this.todo)
    .subscribe(data => console.log(data))
    this.todo = new Todo();
    // this.todoService.getData()
  }

}
