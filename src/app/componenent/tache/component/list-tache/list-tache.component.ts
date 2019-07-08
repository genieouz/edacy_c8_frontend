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
    this.taches = this.tacheService.getTaches();
  }

  removeTache(id) {
    this.tacheService.removeTache(id);
  }
}
