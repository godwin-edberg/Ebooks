import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { DialogComponent } from './shared/dialog/dialog.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { BookManagementModule } from './book-management/book-management.module';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, BookManagementComponent, DialogComponent],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    AppRoutingModule,
    BookManagementModule,
    MaterialModule,
    EffectsModule.forRoot([]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
