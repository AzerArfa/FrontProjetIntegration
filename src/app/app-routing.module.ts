import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';

const routes: Routes = [
  {path:"accueil",component:AccueilComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"login",component:LoginComponent},
  {path:"ajout",component:AjoutProduitComponent},
  {path:"register",component:RegisterComponent},
  { path: "", redirectTo: "accueil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
