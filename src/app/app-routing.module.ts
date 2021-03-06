import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./componenent/home/home.component";
import { LoginComponent } from "./componenent/login/login.component";
import { ProfileComponent } from "./componenent/profile/profile.component";
import { DashbaordComponent } from "./componenent/dashbaord/dashbaord.component";
import { DetailsComponent } from "./componenent/details/details.component";
import { PageNotFoundComponent } from "./componenent/page-not-found/page-not-found.component";
import { AuthGuard } from "./auth/auth.guard";
import { TesteComponent } from "./teste/teste.component";
import { TacheComponent } from "./componenent/tache/tache.component";
import { EditTacheComponent } from "./componenent/tache/component/edit-tache/edit-tache.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },

  { path: "details/:name", component: DetailsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashbaord",
    component: DashbaordComponent,
    canActivate: [AuthGuard]
  },
  { path: "teste", component: TesteComponent },
  { path: "tache", component: TacheComponent },
  { path: "tache/edit/:id", component: EditTacheComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
