import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./componenent/home/home.component";
import { HeaderComponent } from "./componenent/header/header.component";
import { FooterComponent } from "./componenent/footer/footer.component";
import { DashbaordComponent } from "./componenent/dashbaord/dashbaord.component";
import { LoginComponent } from "./componenent/login/login.component";
import { ProfileComponent } from "./componenent/profile/profile.component";
import { DetailsComponent } from "./componenent/details/details.component";
import { PageNotFoundComponent } from "./componenent/page-not-found/page-not-found.component";
import { MeteoListComponent } from "./componenent/meteo-list/meteo-list.component";
import { SearchPipe } from "./search.pipe";
import { TesteComponent } from "./teste/teste.component";
import { TacheComponent } from "./componenent/tache/tache.component";
import { ListTacheComponent } from "./componenent/tache/component/list-tache/list-tache.component";
import { FormTacheComponent } from "./componenent/tache/component/form-tache/form-tache.component";
import { EtatTacheDirective } from "./componenent/tache/directive/etat-tache.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashbaordComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    PageNotFoundComponent,
    MeteoListComponent,
    SearchPipe,
    TesteComponent,
    TacheComponent,
    ListTacheComponent,
    FormTacheComponent,
    EtatTacheDirective
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
