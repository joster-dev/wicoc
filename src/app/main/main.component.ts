import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'wicoc-main',
  imports: [
    HomeComponent,
    AboutComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
