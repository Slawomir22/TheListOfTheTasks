import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-todo-edit',
	templateUrl: './todo-edit.component.html',
	styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent {
	@Input()
	todo!: Todo;
	isEditing: boolean = false;
	isValid: boolean = true;
	constructor(private todosService: TodosService) { }

	editTodo(): void {
		this.isEditing = true;
	}

	saveEditedTodo(taskEditForm: NgForm): void {
		if (taskEditForm.controls['newTitleInput'].invalid) {
			this.isValid = false;
		} else {
			this.todosService.editCurrentTodo(this.todo.id, this.todo.title);
			this.isEditing = false;
			this.isValid = true;
		}
	}
}
