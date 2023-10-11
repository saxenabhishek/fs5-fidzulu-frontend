import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navBarDisplay = 'none';

  toggleNavBarDisplay() {
    this.navBarDisplay = this.navBarDisplay === 'none' ? 'block' : 'none';
  }

  getNavBarDisplayStyle() {
    // Use 'block' for smaller screens and 'none' for larger screens
    return window.innerWidth < 768 ? this.navBarDisplay : 'block';
  }

  ngOnInit() {
    this.navBarDisplay = window.innerWidth < 768 ? 'none' : 'block';
  }
}
