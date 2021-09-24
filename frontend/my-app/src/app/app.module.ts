import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentService } from './shared/services/content.service';
<<<<<<< HEAD
import { PaymentComponent } from './payment/payment.component';
=======
import { FoodListComponent } from './food-list/food-list.component';
>>>>>>> Added food list component, displayed on home page

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
<<<<<<< HEAD
    PaymentComponent
=======
    FoodListComponent
>>>>>>> Added food list component, displayed on home page
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
