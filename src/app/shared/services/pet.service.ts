import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
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
export class PetService {
  apiUrl = 'https://lazyshit-final-petshop.azurewebsites.net/api/pets';
  //apiUrl = 'https://localhost:5001/api/pets';
  constructor(private http: HttpClient, private authenticationService: AuthenticationServiceService) {  }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  getById(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet>(this.apiUrl + '/' + id, httpOptions);
  }

  AddPet(pet: Pet) {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Pet>(this.apiUrl, pet, httpOptions);
  }

  UpdatePet(pet: Pet, id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Pet>(this.apiUrl + '/' + id, pet, httpOptions);
  }

  delete(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete<Pet>(this.apiUrl + '/' + id, httpOptions);
  }
}
