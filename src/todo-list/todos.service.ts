import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo';

@Injectable()
export class TodosService {
	idNumber!: number;

	private allTodos: Todo[] = [];
	private allTodos$ = new BehaviorSubject<Todo[]>(this.allTodos);
	constructor() { }

	addNewTodo(title: string, dueDate: number) {
		this.allTodos.push({
			title: title,
			isDone: false,
			id: this.generateId(),
			dueDate: dueDate,
			status: '',
		})
		this.savingToLocalStorage();
	}


	deleteTodo(id: number): void {
		this.allTodos = this.allTodos.filter((todo: Todo) => todo.id !== id);
		this.savingToLocalStorage();
	}

	setAsDone(id: number): void {
		this.allTodos.forEach((todo: Todo) => {
			todo.id === id ? (todo.isDone = true) : null;
		});
		this.savingToLocalStorage();
	}

	editCurrentTodo(id: number, title: string) {
		this.allTodos.forEach((todo: Todo) => {
			todo.id === id ? (todo.title = title) : null;
		});
		this.savingToLocalStorage();
	}

	savingToLocalStorage(): void {
		localStorage.setItem('allTodos', JSON.stringify(this.allTodos));
		this.allTodos$.next(this.allTodos);
	}

	gettingFromLocalStorage(): BehaviorSubject<Todo[]> {
		this.allTodos = JSON.parse(localStorage.getItem('allTodos') || '[]');
		this.allTodos$.next(this.allTodos);
		return this.allTodos$;
	}

	generateId(): number {
		let firstPartId = Math.random() * 10;
		let secondPartId = Math.random() * 10;
		let idNumber = firstPartId + secondPartId;
		this.idNumber = idNumber;
		return this.idNumber;
	}
}
