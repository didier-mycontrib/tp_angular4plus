import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRequest } from "src/app/common/security-data/auth-request";
import { AuthResponse } from "src/app/common/security-data/auth-response";
import { Observable , of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _AuthBaseUrl = "./auth/login" ; //avec ng serve --proxy-config proxy.conf.json
  
  constructor(private _http : HttpClient) { }


  public postLogin$(authRequest : AuthRequest):Observable<AuthResponse> {
    /*
    let authUrl : string = this._AuthBaseUrl;
    return this._http.post<AuthResponse>(authUrl ,authRequest );
    */
    if(authRequest.password == "admin")
       return of({ authOk : true , authToken: "validAuthToken", message : "successful auth"});
    else
        return of({ authOk : false , authToken: null , message : "auth failed"});
    }


}

