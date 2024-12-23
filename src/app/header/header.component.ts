import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'wicoc-header',
  imports: [
    RouterLink,
    DatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() place: 'top' | 'bottom' | 'other' = 'top';

  eventStart = new Date('2025-02-09T19:00:00.000Z');
  eventEnd = new Date('2025-02-10T01:00:00.000Z');

  stripe = (<any>window).Stripe('pk_test_51QTVgXKI6IbeEj8j0JBA9GOBsWAdNuEpjf8VWT7CjJEUvR5foJ24Hy500f70tFqRU1q8efFQIPXIkAKSZOctxRKa00tQkLXhy3');

  scrollTo(id: string): void {
    window.document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  onClickAttend(): void {
    this.stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1QYWDBKI6IbeEj8jYDBg7pr5', quantity: 1 }],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://docs.stripe.com/payments/checkout/fulfill-orders
       */
      successUrl: 'http://localhost:4200/thank-you',
      cancelUrl: 'http://localhost:4200',
    })
      .then((result: any) => {
        debugger;
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
