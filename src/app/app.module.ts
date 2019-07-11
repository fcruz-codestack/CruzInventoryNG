import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { DeleteItemComponent } from './pages/delete-item/delete-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemComponent,
    DeleteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
