import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { A11yModule } from '@angular/cdk/a11y';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
