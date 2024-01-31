import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-todo-search',
	templateUrl: './todo-search.component.html',
	styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent {

	searchTitle!: string;
	@Output()
	sendSearchedTitile = new EventEmitter<string>();

	startSearch(): void {
		this.sendSearchedTitile.emit(this.searchTitle);
	}


}
