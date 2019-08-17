import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { OffertsComponent } from './pages/offerts/offerts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SinginComponent } from './pages/singin/singin.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './login/login/login.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
{path: 'login', component:LoginComponent },
{path: 'inicio', component:InicioComponent },
{path: 'habitaciones', component:RoomsComponent},
{path: 'novedades', component:OffertsComponent},
{path: 'nosotros' , component:NosotrosComponent},
{path: 'Contactenos', component:ContactComponent},
{path: 'Registrarse', component:SinginComponent},
{path: 'admin', component:AdminComponent},
{path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
