import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from 'src/app/model/member';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  
  membersList: Member[] = [];

  API_URL = 'http://localhost:3034/books/teams';
  constructor(private httpClient: HttpClient) {}

  getAllMembers(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}`);
  }
}
