import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo/todo.module';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {

  }

  getData() {
    console.log('from todoService');

    this.httpClient.get<Array<Todo>>("http://localhost:3000/todos")
      .subscribe(data => console.log(data))
  }
}
