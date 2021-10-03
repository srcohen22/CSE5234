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
  }

  submitShipping(shipping_first: string, shipping_last: string, address: string, address2: string, city: string, state: string, zip: string, country: string, phone: string) {
    this.shippingInfo.name = shipping_first + " " + shipping_last
    this.shippingInfo.address = address
    this.shippingInfo.address_line2 = address2
    this.shippingInfo.city = city
    this.shippingInfo.state = state
    this.shippingInfo.zip = parseInt(zip)
    this.shippingInfo.country = country
    this.shippingInfo.phone = phone
    this.customerService.addShipping(this.shippingInfo)
  }

}
