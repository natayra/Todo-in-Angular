import { TodoItem } from '../interfaces/todo-item';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
  

    <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
`,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  removeItem() {
    this.remove.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

}
