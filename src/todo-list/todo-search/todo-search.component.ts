import { Component } from '@angular/core';

@Component({
	selector: 'app-todo-search',
	templateUrl: './todo-search.component.html',
	styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent {
	searchTitle: string | undefined;
}
