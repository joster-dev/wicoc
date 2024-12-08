import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'wicoc-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  @ViewChild('youtube') youtubeIframe!: HTMLIFrameElement;

  ngOnInit(): void {
    setTimeout(() => {
      const title = this.youtubeIframe.getElementsByClassName('ytp-show-cards-title');
      if (title.length > 0) {
        title[0].remove();
      }
    }, 3000);
  }
}
