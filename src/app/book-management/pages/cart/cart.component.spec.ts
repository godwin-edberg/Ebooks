import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { CartComponent } from './cart.component';
import { BooksFacade } from '../+state/books.facade';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let booksFacade: BooksFacade;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array) => ({}) });
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CartComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: BooksFacade },
      ],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    booksFacade = TestBed.inject(BooksFacade);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'displayAllCartItems').and.callThrough();
      component.ngOnInit();
      expect(component.displayAllCartItems).toHaveBeenCalled();
    });
  });

  describe('purchaseBook', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.purchaseBook();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  it('show specific book data based on the card clicked', () => {
    jest.spyOn(component, 'onCardClick');
    component.onCardClick({ id: 'XfvcscdsIc' });
    fixture.detectChanges();
    expect(component.onCardClick).toHaveBeenCalled();
  });

  it('catch error when bookId is not passed', () => {
    const spy = jest.spyOn(component, 'getIdOfBook');
    component.getIdOfBook(null);
    expect(spy).toHaveBeenCalled();
  });

  it('remove items from cart successfully', () => {
    jest.spyOn(component, 'removeItem');
    component.removeItem({ id: 'cdsHJMkccd' });
    expect(component.removeItem).toHaveBeenCalled();
  });
});
