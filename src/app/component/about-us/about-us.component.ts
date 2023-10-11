import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  providers: [provideAnimations()],
})
export class AboutUsComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  frontendTeamMembers: any[] = new Array(3).fill({
    name: '',
    teamName: '',
    quote: '',
    imageLink: '',
    corpid: '',
    department: '',
  });
  constructor(
    private breakpointObserver: BreakpointObserver,
    // private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/1.png',
    };
    this.slides[1] = {
      src: './assets/2.png',
    };
    this.slides[2] = {
      src: './assets/3.png',
    };
    this.frontendTeamMembers[0] = {
      name: 'Aditya',
      corpid: 'A721312',
      department: 'Frontend',
    };
    this.frontendTeamMembers[1] = {
      name: 'Nayan',
      corpid: 'A721312',
      department: 'Frontend',
    };
    this.frontendTeamMembers[2] = {
      name: 'Vanditha',
      corpid: 'A721312',
      department: 'Frontend',
    };
    this.frontendTeamMembers[3] = {
      name: 'Akhil P',
      corpid: 'A721312',
      department: 'Backend',
    };

    // this.http.get('http://localhost:8080/teammembers').subscribe(
    //   (data: any) => {
    //     this.frontendTeamMembers = data; // Assuming data is in JSON format
    //   },
    //   (error) => {
    //     console.error('Error fetching team members:', error);
    //   }
    // );
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  getGridListCols(): number {
    if (this.breakpointObserver.isMatched('(min-width: 1280px)')) {
      return 3;
    }
    if (this.breakpointObserver.isMatched('(min-width: 960px)')) {
      return 2;
    }
    if (this.breakpointObserver.isMatched('(min-width: 600px)')) {
      return 2;
    }
    return 1;
  }
}
