import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './shared/services/content.service';
import { PaymentComponent } from './payment/payment.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SummaryComponent } from './cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FinalSummaryComponent } from './final-summary/final-summary.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PaymentComponent,
    ShippingComponent,
    FoodListComponent,
    SummaryComponent,
    ConfirmationComponent,
    FinalSummaryComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    RouterModule.forRoot([
      {path:'', component: FoodListComponent},
      {path:'cart', component: SummaryComponent},
      {path:'shipping', component: ShippingComponent},
      {path:'summary', component: FinalSummaryComponent},
      {path:'confirmation', component: ConfirmationComponent}
    ]),
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
