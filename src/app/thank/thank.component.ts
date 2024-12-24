import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'wicoc-thank',
  imports: [
    HeaderComponent,
    FooterComponent,
    DatePipe,
  ],
  templateUrl: './thank.component.html',
  styleUrl: './thank.component.scss'
})
export class ThankComponent {
  eventStart = new Date('2025-02-09T19:00:00.000Z');
}
