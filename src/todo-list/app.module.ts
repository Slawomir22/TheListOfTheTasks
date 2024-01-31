import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { PIPES } from './pipes';

@NgModule({
	declarations: [TodoListComponent, TodoComponent, TodoAddComponent, TodoEditComponent, TodoSearchComponent],
	imports: [
		BsDatepickerModule.forRoot(),
		ModalModule.forRoot(),
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		BrowserModule,
		AlertModule.forRoot(),
		PIPES
	],
	bootstrap: [TodoListComponent],
})
export class AppModule { }
