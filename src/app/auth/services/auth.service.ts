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
  private uid!: string

  get userID(){
    return this.uid;
  }

  constructor(private http: HttpClient) { }


  login(user: userInterface){
    const url: string = environment.baseURL
    return this.http.post<requestResponse>(`${url}/login`, user).pipe(
      tap(resp =>{
        if(resp.ok){
          sessionStorage.setItem(resp.uid!, resp.name!);
          this.uid = resp.uid!;
        }
      }),
      map(result => {
        return result.ok
      }),
      catchError(err => of(err.error.msg))
    )
  }

  createUser(user: userInterface){
    const url: string = environment.baseURL
    return this.http.post<requestResponse>(`${url}/new`, user).pipe(
      tap(resp => {
          if(resp.ok){
            this.uid = resp.uid!;
            sessionStorage.setItem(resp.uid!, resp.name!)
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
