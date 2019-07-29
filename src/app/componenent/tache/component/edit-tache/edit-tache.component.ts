import { TacheService } from "./../../service/tache.service";
import { ParamMap, Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-edit-tache",
  templateUrl: "./edit-tache.component.html",
  styleUrls: ["./edit-tache.component.css"]
})
export class EditTacheComponent implements OnInit {
  tache;
  constructor(
    private route: ActivatedRoute,
    private tacheService: TacheService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.tacheService.getTache(id).subscribe((data: any) => {
      this.tache = data.message;
      console.log("voici la tache ", this.tache);
    });
  }
}
