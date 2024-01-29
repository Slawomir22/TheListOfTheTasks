export interface Todo {
	[x: string]: any;
	title: string;
	isDone: boolean;
	id: number;
	dueDate: number;
	status: string;
}