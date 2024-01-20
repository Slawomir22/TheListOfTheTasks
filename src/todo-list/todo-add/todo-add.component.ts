import { Component, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TodosService } from '../todos.service';

@Component({
	selector: 'app-todo-add',
	templateUrl: './todo-add.component.html',
	styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
	bsInlineValue = new Date();
	modalRef?: BsModalRef;
	addTaskForm!: NgForm;

	title!: string | null;
	dueDate!: number;
	minimalDate: Date = new Date();

	constructor(
		private todosService: TodosService,
		private modalService: BsModalService
	) { }

	openTaskModal(template: TemplateRef<unknown>): void {
		this.modalRef = this.modalService.show(template);
	}

	valueChange(date: Date): void {
		if (date) {
			this.dueDate = date.getTime();
		}
	}

	saveNewTask(): void {
		if (this.title && this.dueDate) {
			this.todosService.addNewTodo(this.title, this.dueDate);
			setTimeout(() => {
				this.title = null;
			}, 500);
		}
		this.modalRef?.hide();
		this.todosService.savingToLocalStorage();
	}
}
