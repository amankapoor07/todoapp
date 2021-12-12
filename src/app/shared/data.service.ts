import { Injectable } from '@angular/core';
import{Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[]=[
    // new Todo('This is a test',true),
    // new Todo('this is just testing this is just testingthis is just testingthis is just testingthis is just testing')
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  updateTodo(index:number,updatedTodo:Todo){
    this.todos[index]=updatedTodo
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
  }
}
