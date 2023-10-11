import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.css']
})
export class TeamMemberCardComponent {

  @Input() name: string = "Dog";
  @Input() corpid: string = "A11111";
  @Input() imageUrl: string = "https://i.ibb.co/DkJZwMN/IMG-20230309-WA0011-3.jpg";
  @Input() quote: string = "Ek Quote";

}
