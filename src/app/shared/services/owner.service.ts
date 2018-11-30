import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Owner} from '../models/owner';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationServiceService} from './authentication-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})

export class OwnerService {
// apiUrl = 'https://localhost:5001/api/owners';
  apiUrl = 'https://lazyshit-final-petshop.azurewebsites.net/api/owners';
  constructor(private http: HttpClient, private authentication: AuthenticationServiceService) { }

  getById(id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authentication.getToken());
    return this.http.get<Owner>(this.apiUrl + '/' + id, httpOptions);
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl + '');
  }

  delete(id: number): Observable<Owner> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authentication.getToken());
    return this.http.delete<Owner>(this.apiUrl + '/' + id, httpOptions);
  }

  addOwner(owner: Owner) {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authentication.getToken());
    return this.http.post<Owner>(this.apiUrl + '', owner, httpOptions);
  }
  updateOwner(owner: Owner, id: number) {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authentication.getToken());
    return this.http.put<Owner>(this.apiUrl + '/' + id, owner, httpOptions);
  }
}
