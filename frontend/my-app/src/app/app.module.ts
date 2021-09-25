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
import { FoodListComponent } from './food-list/food-list.component';
import { SummaryComponent } from './cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PaymentComponent,
    FoodListComponent,
    SummaryComponent
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
      {path:'cart', component: SummaryComponent}
    ])
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
