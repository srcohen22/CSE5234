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
    console.log(this.payment.length)
    if (this.payment.length == 0){
      var blankpayment = <PaymentInfo> {}
      return blankpayment
    }
    return this.payment[this.payment.length-1];
  }

  addShipping(shipping: ShippingInfo) {
    this.shipping = []
    this.shipping.push(shipping)
  }

  getShipping(){
    if (this.shipping.length == 0){
      var blankshipping = <ShippingInfo> {}
      return blankshipping
    }
    return this.shipping[this.shipping.length-1]
  }
}
