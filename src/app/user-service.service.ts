import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _user: BehaviorSubject<SocialUser>;

  constructor() {
    this._user = new BehaviorSubject<SocialUser>(null);
   }
   public getUser():Observable<SocialUser>{
     return this._user.asObservable();
   } 
   public setUser(user: SocialUser): void{
    
     this._user.next(user);

   }

}
