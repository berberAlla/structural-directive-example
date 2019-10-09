import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralDirectiveDirective } from './structural-directive.directive';
import { NotStructuralDirective } from './not-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectiveDirective,
    NotStructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
