import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.css']
})
export class TeamMemberCardComponent {

  @Input() name: string = "Dog";
  @Input() corpid: string = "A11111";
  @Input() imageUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

}
