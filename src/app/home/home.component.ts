import { Component } from '@angular/core';
import { StripeService } from '../stripe.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'wicoc-home',
  imports: [
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  onClickDown(): void {
    const about = window.document.getElementById('about');
    about?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
