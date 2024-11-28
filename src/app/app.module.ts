import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangasComponent } from './manga/manga.component';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { UpdateMangaComponent } from './update-manga/update-manga.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RechercheParDemographieComponent } from './recherche-par-demographie/recherche-par-demographie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeDemographiesComponent } from './liste-demographies/liste-demographies.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateDemographieComponent } from './update-demographie/update-demographie.component';


@NgModule({
  declarations: [
    AppComponent,
    MangasComponent,
    AddMangaComponent,
    UpdateMangaComponent,
    RechercheParDemographieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListeDemographiesComponent,
    UpdateDemographieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
