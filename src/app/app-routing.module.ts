import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListBooksComponent} from './list-books/list-books.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'list-book',
    component: ListBooksComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
