import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from '../header/header.component';

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
  supportEmail = 'IntentionalCommunityConference@proton.me';
}
