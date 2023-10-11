import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  slides: any[] = new Array(1).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/banner2.png',
    };
    
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }


}
