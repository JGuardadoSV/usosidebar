import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    ButtonModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
