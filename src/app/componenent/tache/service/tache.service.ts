import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class TacheService {
  taches = [
    { titre: "tache 1", etat: "Terminer" },
    { titre: "tache 2", etat: "En cours" },
    { titre: "tache 3", etat: "A faire" },
    { titre: "tache 4", etat: "A faire" }
  ];
  constructor(private http: HttpClient) {}

  getTaches() {
    return this.http.get(`${environment.BASE_API_URL}/tache`);
  }
  getTache(id) {
    return this.http.get(`${environment.BASE_API_URL}/tache/${id}`);
  }
  addTache(tache) {
    this.taches.push(tache);
  }
  removeTache(tacheId) {
    this.taches.splice(tacheId, 1);
  }
}
