import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookManagementModule } from './book-management/book-management.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => BookManagementModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
