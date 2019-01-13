import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TruckViewComponent } from './truck/view/details/truckView.component';
import { AppRoutingModule } from './app-routing.module';
import { TruckCreateComponent } from './truck/view/create-vew/create-view.component';
import { TruckListComponent } from './truck/view/truck-list/truck-list.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatExpansionModule,
  MatToolbarModule,
  MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TruckViewComponent,
    TruckCreateComponent,
    TruckListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
