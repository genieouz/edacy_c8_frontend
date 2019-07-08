import { Injectable } from "@angular/core";

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
  constructor() {}

  getTaches() {
    return this.taches;
  }

  addTache(tache) {
    this.taches.push(tache);
  }
  removeTache(tacheId) {
    this.taches.splice(tacheId, 1);
  }
}
