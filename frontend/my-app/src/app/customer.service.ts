import { Injectable } from '@angular/core';
import { PaymentInfo } from './payment/payInfo'
import { ShippingInfo } from './shipping/shippingInfo';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  payment: PaymentInfo[] = [];
  shipping: ShippingInfo[] = []
  constructor() { }

  addPayment(payment: PaymentInfo) {
    this.payment = [] // Needs to clear payment if the user goes back to the form
    this.payment.push(payment)
  }

  getPayment() {
    return this.payment[0];
  }

  addShipping(shipping: ShippingInfo) {
    this.shipping = []
    this.shipping.push(shipping)
  }

  getShipping(){
    return this.shipping[0]
  }
}
