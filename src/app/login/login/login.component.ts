import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeado: boolean = false;
  usuario: SocialUser;

  constructor(private authService: AuthService,
              private userSubject: UserServiceService,
            ) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user){
        this.logeado=true;
        this.usuario=user;
      }
      else{
        this.logeado=false;
      }
      console.log(user) 
      this.userSubject.setUser(user); 
    }
    );
  }
  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  cerrarSesion(): void {
    this.authService.signOut();
  }

}
