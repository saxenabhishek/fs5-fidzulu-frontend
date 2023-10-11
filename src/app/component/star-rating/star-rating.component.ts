import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array.from(
      { length: this.maxRating },
      (_, index) => index + 1
    );
  }
}
