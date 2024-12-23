import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'wicoc-refund',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './refund.component.html',
  styleUrl: './refund.component.scss'
})
export class RefundComponent {
  supportEmail = 'returntotheland@proton.me';
}
