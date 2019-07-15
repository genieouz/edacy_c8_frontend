import { TacheService } from "../../service/tache.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-tache",
  templateUrl: "./list-tache.component.html",
  styleUrls: ["./list-tache.component.css"]
})
export class ListTacheComponent implements OnInit {
  taches = [];
  constructor(private tacheService: TacheService) {}

  ngOnInit() {
    this.tacheService.getTaches().subscribe(
      (data: any) => {
        this.taches = data;
      },
      error => {
        console.log("le serveur a répondu mais ya une erreur ", error);
      }
    );
  }

  removeTache(id) {
    this.tacheService.removeTache(id);
  }
}
