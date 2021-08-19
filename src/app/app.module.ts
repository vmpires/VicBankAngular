import { HttpClientModule } from '@angular/common/http';
import { NovaTransferenciaComponent } from './nova-tranferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    {provide: APP_BASE_HREF, useValue: ''}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
