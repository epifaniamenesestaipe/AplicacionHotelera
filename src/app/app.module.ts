import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ESto es para login

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BanersComponent } from './baners/baners.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { OffertsComponent } from './pages/offerts/offerts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SinginComponent } from './pages/singin/singin.component';
import { RoomsDisponiblesComponent } from './pages/rooms-disponibles/rooms-disponibles.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './login/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("761309882279-9gdpl7teu3pm55h217hhnpc50bvspahe.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    BanersComponent,
    RoomsComponent,
    OffertsComponent,
    ContactComponent,
    SinginComponent,
    RoomsDisponiblesComponent,
    NosotrosComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
