import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthRequest } from "src/app/common/security-data/auth-request";
import { AuthService } from "src/app/common/security-service/auth.service";
import { AuthResponse } from "src/app/common/security-data/auth-response";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  authRequest : AuthRequest;
  authResponse : AuthResponse = null;
  message : string = "";
  authOk: boolean = false;

  @Output()
  public authentified: EventEmitter<{ ok: boolean, message: string }> =
    new EventEmitter<{ ok: boolean, message: string }>();


  constructor(private authService : AuthService) { 
    this.authRequest = new AuthRequest();
  }

  ngOnInit() {
  }

  onLoginAsAdmin(){
    console.log("login as admin ...");
    this.authService.postLogin$(this.authRequest)
        .subscribe(  (authResponse) => {this.authResponseCallback(authResponse);});
  }

  authResponseCallback(authResponse : AuthResponse){
      console.log(JSON.stringify(authResponse));
      if(authResponse!=null){
        this.authResponse = authResponse;
        this.message = this.authResponse.message;
        if(authResponse.authOk){
          this.authOk=true;
          this.authentified.emit({ok:true,message:"authentified"});
        }
      }
  }

}
