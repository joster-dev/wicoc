import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StripeService } from '../stripe.service';

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

  constructor(
    private stripeService: StripeService,
  ) { }

  scrollTo(id: string): void {
    window.document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  onClickAttend(): void {
    this.stripeService.checkout();
  }
}
