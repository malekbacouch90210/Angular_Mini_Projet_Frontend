import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MangasComponent } from './manga/manga.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { UpdateMangaComponent } from './update-manga/update-manga.component';
import { RechercheParDemographieComponent } from './recherche-par-demographie/recherche-par-demographie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { Pipe, PipeTransform } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MangaGuard } from './manga.guard';
import { ListeDemographiesComponent } from './liste-demographies/liste-demographies.component';



const routes: Routes = [
  { path: 'mangas', component: MangasComponent },
  { path: 'add-manga', component: AddMangaComponent , canActivate: [MangaGuard]},
  { path: 'updateManga/:idManga', component: UpdateMangaComponent },
  { path: 'rechercheParDemographiqe', component : RechercheParDemographieComponent},
  { path: 'rechercheParNom',component:RechercheParNomComponent},
  { path: 'app-forbidden', component: ForbiddenComponent }, 
  { path: 'register',component:RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path: "listeDemographie", component : ListeDemographiesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
