import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { requestResponse } from '../interfaces/requestResponseInterface';
import { userInterface } from '../interfaces/userInterface';
import { catchError, map, tap } from "rxjs/operators"
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL



  userName(): string{
    let name: string = sessionStorage.getItem("name")!
    return name
  }

  constructor(private http: HttpClient) { }


  login(user: userInterface){

    sessionStorage.clear();
    
    return this.http.post<requestResponse>(`${this.baseURL}/login`, user).pipe(
      tap(resp =>{
        if(resp.ok){

          sessionStorage.setItem("name", resp.name!);
        }
      }),
      map(result => {
        return result.ok
      }),
      catchError(err => of(err.error.msg))
    )
  }

  createUser(user: userInterface){

    sessionStorage.clear();

    return this.http.post<requestResponse>(`${this.baseURL}/new`, user).pipe(
      tap(resp => {
          if(resp.ok){
            sessionStorage.setItem("name", resp.name!)
          }
        }),
        map(
          result => {
            return result.ok
          }
        ),
        catchError(err => of(err.error.msg))
    )
  }
}
