import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { BookDetailComponent } from './book-detail.component';
import { BooksFacade } from '../+state/books.facade';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let booksFacade: BooksFacade;

  beforeEach(() => {
    const activatedRouteStub = () => ({ params: { subscribe: (f) => f({}) } });
    const routerStub = () => ({ navigate: (array) => ({}) });
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BookDetailComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: BooksFacade },
      ],
    });
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    booksFacade = TestBed.inject(BooksFacade);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('purchaseBook', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.purchaseBook();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  it('check whether initial page loads successfully', () => {
    const initialSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(initialSpy).toHaveBeenCalled();
  });

  it('check whether books can be added to cart on the book details page', () => {
    const initialSpy = jest.spyOn(component, 'addToCart');
    component.addToCart();
    expect(initialSpy).toHaveBeenCalled();
  });
});
