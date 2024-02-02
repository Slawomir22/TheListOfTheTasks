import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';
import { TitleCasePipe } from '@angular/common';

@Pipe({
	name: 'sorting',
	standalone: true
})
export class SortingPipe implements PipeTransform {

	transform(title: Todo[]): Todo[] {
		return title.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1)
	}

}
