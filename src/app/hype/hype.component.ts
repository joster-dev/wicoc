import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

const milliSecondsInASecond = 1000;
const hoursInADay = 24;
const minutesInAnHour = 60;
const secondsInAMinute = 60;

@Component({
  selector: 'wicoc-hype',
  imports: [
    HeaderComponent,
  ],
  templateUrl: './hype.component.html',
  styleUrl: './hype.component.scss'
})
export class HypeComponent implements OnInit {
  event = new Date('2025-02-09T19:00:00.000Z');
  difference = this.event.getTime() - new Date().getTime();
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor(
  ) { }

  ngOnInit(): void {
    interval(milliSecondsInASecond).subscribe(() => {
      const timeDifference = this.event.getTime() - new Date().getTime();

      this.days = Math.floor(
        timeDifference / (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
      )

      this.hours = Math.floor(
        (timeDifference / (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) % hoursInADay
      );

      this.minutes = Math.floor(
        (timeDifference / (milliSecondsInASecond * minutesInAnHour)) % secondsInAMinute
      );

      this.seconds = Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;
    });
  }
}
