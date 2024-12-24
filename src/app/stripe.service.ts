import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  stripe = (<any>window).Stripe('pk_live_51QYyLZDOsCbaFxnoQ3YpZOIWBtDbgHE36lxYnxoxXwUbDApOE71iIpNQlCGNVHvr2Fotd4fhfZSkHVmLI3Zhm1W200ETbub8SJ');

  checkout(): void {
    this.stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1QZKwvDOsCbaFxnoZe3bx4rs', quantity: 1 }],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://docs.stripe.com/payments/checkout/fulfill-orders
       */
      successUrl: window.location.protocol + '//intentionalcommunity.live/#/thank-you',
      cancelUrl: window.location.protocol + '//intentionalcommunity.live/',
    })
      .then((result: any) => {
        if (result.error) {
          alert(result.error.message);
          /*
           * If `redirectToCheckout` fails due to a browser or network
           * error, display the localized error message to your customer.
           */
          // var displayError = document.getElementById('error-message');
          // displayError.textContent = result.error.message;
        }
      });
  }
}
