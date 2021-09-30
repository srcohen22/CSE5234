import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'page', component: PageComponent} ,
  { path: 'shipping', component: ShippingComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }