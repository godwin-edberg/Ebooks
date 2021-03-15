import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookManagementRoutingModule } from './book-management-routing.module';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { PurchaseBookComponent } from './pages/purchase-book/purchase-book.component';
import { reducer } from './pages/+state/books.reducer';
import { BookEffects } from './pages/+state/books.effects';
import { BooksFacade } from './pages/+state/books.facade';
import { SearchBooksComponent } from './pages/search-books/search-books.component';
import { CartComponent } from './pages/cart/cart.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { MaterialModule } from '../shared/material/material.module';
@NgModule({
  declarations: [
    SearchBooksComponent,
    CartComponent,
    CollectionComponent,
    BookDetailComponent,
    PurchaseBookComponent,
  ],
  imports: [
    CommonModule,
    BookManagementRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forFeature('books', reducer),
    EffectsModule.forFeature([BookEffects]),
    NgbModule,
  ],
  providers: [BooksFacade],
})
export class BookManagementModule {}
