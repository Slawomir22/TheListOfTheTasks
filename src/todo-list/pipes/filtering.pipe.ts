import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
	name: 'filtering',
	standalone: true
})
export class FilteringPipe implements PipeTransform {

	transform(todos: Todo[], searchTitle: string): Todo[] | null {
		if (!todos) {
			return null;
		}

		if (!searchTitle) {
			return todos;
		}

		searchTitle = searchTitle.toLowerCase();

		return todos.filter(todo => {
			return todo.title.toLowerCase().includes(searchTitle);
		});

	}

}
