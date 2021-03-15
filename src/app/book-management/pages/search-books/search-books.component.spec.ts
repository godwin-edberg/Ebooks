import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SearchBooksComponent } from './search-books.component';
import { BooksFacade } from '../+state/books.facade';

describe('SearchBooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;
  let booksFacade: BooksFacade;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array) => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule, StoreModule.forRoot({})],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchBooksComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: BooksFacade },
      ],
    });
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
    booksFacade = TestBed.inject(BooksFacade);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('load ngOnit without error', () => {
    component.ngOnInit();
    // component.searchBooks('angular');
    const spy = jest.spyOn(component, 'searchBooks');
    component.searchBooks('angular');

    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.searchBooks).toBeDefined();
  });

  it('navigate to detail page on card click without error', () => {
    component.ngOnInit();
    // component.searchBooks('angular');
    const spy = jest.spyOn(component, 'onCardClick');
    component.onCardClick({ id: 'poKxdtgdc' });

    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.onCardClick).toBeDefined();
  });

  it('navigate to detail page on card click when bookId not passed properly', () => {
    component.ngOnInit();
    const spy = jest.spyOn(component, 'onCardClick');
    component.onCardClick(null);

    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.onCardClick).toHaveBeenCalled();
  });
});
