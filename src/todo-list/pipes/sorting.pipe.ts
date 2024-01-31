import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
	name: 'sorting',
	standalone: true
})
export class SortingPipe implements PipeTransform {

	transform(value: Array<Todo>): Array<Todo> {
		return value.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1)
	}

}
