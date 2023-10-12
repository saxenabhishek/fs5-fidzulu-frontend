import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/app/model/member';
import { AboutServiceService } from './about-service.service';

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
  // frontendTeamMembers: any[] = new Array(3).fill({
  //   name: '',
  //   teamName: '',
  //   quote: '',
  //   imageLink: '',
  //   corpid: '',
  //   department: '',
  // });
  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient,
    private aboutUsService: AboutServiceService
  ) {}

  frontendTeamMembers: Member[] = [];

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

    this.getAllMembers();

    
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

  getAllMembers() {
    this.aboutUsService.getAllMembers().subscribe((response) => {
      if (response && response.body && Array.isArray(response.body)) {
        
        this.frontendTeamMembers = response.body;
        for ( const i of this.frontendTeamMembers){
    
          if(i.name === 'Vanditha'){
            i.imageLink = "https://i.ibb.co/28HrJ5Y/a723564.png"
          }
        }
        console.log(this.frontendTeamMembers);
      } else {
        console.error('Invalid JSON structure');
      }
    });

   
  }
}
