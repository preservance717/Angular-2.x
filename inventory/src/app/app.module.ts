import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InventoryApp } from './app.component';

@NgModule({
  declarations: [
    InventoryApp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryApp]
})
export class AppModule { }
