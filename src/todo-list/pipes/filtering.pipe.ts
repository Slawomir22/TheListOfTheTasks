import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
	name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

	transform(titles: Todo[], searchTitle: string): Todo[] | null {
		if (!titles || !searchTitle) {
			return null;
		}

		searchTitle = searchTitle.toLocaleLowerCase();

		return titles.filter(title => {
			return title.title.toLocaleLowerCase().includes(searchTitle);
		})

	}

}
