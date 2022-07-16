import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common'; //configurar data para pt-br

registerLocaleData(localePt, 'pt'); //configurar data para pt-br

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}, //configurar data para pt-br
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'} //configurar moeda para pt-br
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
