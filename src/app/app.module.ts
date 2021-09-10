import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatRippleModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeDialogComponent,
  ],
  imports: [
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatInputModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
