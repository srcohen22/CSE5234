import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './shared/services/content.service';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PaymentComponent,
    ShippingComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
