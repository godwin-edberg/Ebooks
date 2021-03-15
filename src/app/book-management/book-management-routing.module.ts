import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookManagementComponent } from './book-management.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { PurchaseBookComponent } from './pages/purchase-book/purchase-book.component';
import { SearchBooksComponent } from './pages/search-books/search-books.component';


const routes: Routes = [
  {path : '', component : BookManagementComponent,
  children : [
  {
    path: '',
    component: SearchBooksComponent,
  },
  {
    path: 'details/:id',
    component: BookDetailComponent,
  },
  {
    path: 'buy/:id',
    component: PurchaseBookComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'collection', component: CollectionComponent }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookManagementRoutingModule {}
