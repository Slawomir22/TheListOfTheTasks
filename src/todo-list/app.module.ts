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
import { SortingPipe } from './pipes/sorting.pipe';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { FilteringPipe } from './pipes/filtering.pipe';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, TodoAddComponent, TodoEditComponent, SortingPipe, TodoSearchComponent, FilteringPipe],
  imports: [
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AlertModule.forRoot()
  ],
  bootstrap: [TodoListComponent],
})
export class AppModule {}
