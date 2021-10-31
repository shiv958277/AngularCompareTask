import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { PackageComponent } from './website/package/package.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
