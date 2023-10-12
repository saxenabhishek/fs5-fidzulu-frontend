import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navBarDisplay = "block";
  isMenuOpen: boolean = false;

  toggleNavBarDisplay() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getNavBarDisplayStyle() {
    return window.innerWidth < 768 ? 'none' : 'block';
  }

  ngOnInit() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 768) {
      // Close the menu if the screen size becomes larger
      this.isMenuOpen = false;
    }
  }
}
