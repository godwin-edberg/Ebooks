import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { BooksFacade } from '../+state/books.facade';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { BooksDetail } from 'src/app/models/books-detail';

@Component({
  selector: 'app-assignment-purchase-book',
  templateUrl: './purchase-book.component.html',
  styleUrls: ['./purchase-book.component.scss'],
})
export class PurchaseBookComponent implements OnInit {
  bookId: string;
  imagePath: string;
  name: string;
  email: string;
  phone: string;
  address: string;

  constructor(
    private facade: BooksFacade,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.imagePath = 'https://static.vecteezy.com/system/resources/thumbnails/000/437/183/small/Ecommerce__28108_29.jpg';
    this.route.params.subscribe((params) => {
      this.bookId = params.id;
    });
  }

  onSubmit(): void {
    this.facade.addBookToCollectionList(
      new BooksDetail({
        id: this.bookId,
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      })
    );
    this.dialog.open(DialogComponent);
  }
}
