import { TacheService } from "../../service/tache.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

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
        this.taches = data.message;
      },
      (error: HttpErrorResponse) => {
        console.log("le serveur a répondu mais ya une erreur ", error);
      }
    );
  }

  removeTache(id) {
    this.tacheService.removeTache(id);
  }
}
