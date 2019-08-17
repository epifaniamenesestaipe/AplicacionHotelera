import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeado: boolean = false;
  usuario: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user){
        this.logeado=true;
        this.usuario=user;
      }
      else{
        this.logeado=false;
      }
      console.log()
    });
  }
  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  cerrarSesion(): void {
    this.authService.signOut();
  }

}
