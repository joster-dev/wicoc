import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RefundComponent } from './refund/refund.component';
import { ThankComponent } from './thank/thank.component';

export const routes: Routes = [{
  path: '',
  component: MainComponent,
}, {
  path: 'refund-and-dispute',
  component: RefundComponent,
}, {
  path: 'thank-you',
  component: ThankComponent,
}];
