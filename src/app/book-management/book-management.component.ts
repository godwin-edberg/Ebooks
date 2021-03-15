import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BooksFacade } from './pages/+state/books.facade';


@Component({
  selector: 'app-assignment-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss'],
})
export class BookManagementComponent implements OnInit {
  count: number;
  collectionCount: number;
  mobileQuery: MediaQueryList;

  constructor(private facade: BooksFacade, private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 720px)');
  }

  ngOnInit(): void {
    this.facade.getCartItemsCount().subscribe((count) => {
      this.count = count;
    });
    this.facade.getCollectionItemsCount().subscribe((count) => {
      this.collectionCount = count;
    });
  }
}
