import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input()
  todo!: Todo;
  @Input()
  status!: boolean;
  currentDate = new Date().getTime();

  constructor(public todosService: TodosService) {}

  switchingStatuses(): void {
    if (this.todo.isDone) {
      this.todo.status = 'Completed';
    } else {
      if (this.todo.dueDate) {
        const deadline = new Date(this.todo.dueDate).getTime();
        if (this.currentDate <= deadline) {
          this.todo.status = 'To be done';
        } else {
          this.todo.status = 'Overdue';
        }
      }
    }
    this.todosService.savingToLocalStorage();
  }

  removeTodo(): void {
    this.todosService.deleteTodo(this.todo.id);
  }

  checkAsDone(): void {
    this.todosService.setAsDone(this.todo.id);
  }
}
