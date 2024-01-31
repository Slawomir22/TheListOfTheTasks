import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css'],
	providers: [TodosService],
})
export class TodoListComponent implements OnInit {

	allTodos$!: BehaviorSubject<Todo[]>;
	status: boolean = false;
	titleToSearch!: string;

	constructor(private todosService: TodosService) { }

	ngOnInit(): void {
		this.allTodos$ = this.todosService.gettingFromLocalStorage();
	}

	showStatuses(): void {
		this.status = !this.status;
	}

	trackById(index: number, todo: Todo) {
		return todo ? todo.id : null;
	}

	filterTitles(searchedTitle: string) {
		this.titleToSearch = searchedTitle;
	}
}
