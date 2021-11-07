import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ShippingInfo } from './shippingInfo';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingInfo = <ShippingInfo> {}

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.refillShipping()
  }

  ngAfterViewInit(): void {
    this.refillShipping()
  }

  // fill payment text boxes with current payment
  // will be blank if user's first payment, otherwise will fill 
  refillShipping(){
    this.shippingInfo = this.customerService.getShipping();
  }

  submitShipping(shipping_first: string, shipping_last: string, address: string, address2: string, city: string, state: string, zip: string, country: string, phone: string, email: string) {
    this.shippingInfo.first_name = shipping_first
    this.shippingInfo.last_name = shipping_last
    this.shippingInfo.address = address
    this.shippingInfo.address_line2 = address2
    this.shippingInfo.city = city
    this.shippingInfo.state = state
    this.shippingInfo.zip = parseInt(zip)
    this.shippingInfo.country = country
    this.shippingInfo.phone = phone
    this.shippingInfo.email = email
    this.customerService.addShipping(this.shippingInfo)
    console.log(this.shippingInfo.email)
  }

}
