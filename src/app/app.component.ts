import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HypeComponent } from './hype/hype.component';

@Component({
  selector: 'wicoc-root',
  imports: [
    HomeComponent,
    AboutComponent,
    HypeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wicoc';
}
