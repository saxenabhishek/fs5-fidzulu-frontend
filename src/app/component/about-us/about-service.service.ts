import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from 'src/app/model/member';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  
  membersList: Member[] = [];

  API_URL = 'http://ec2-43-205-242-183.ap-south-1.compute.amazonaws.com:3022/classB/books/teams';
  constructor(private httpClient: HttpClient) {}

  getAllMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(`${this.API_URL}`);
  }
}
