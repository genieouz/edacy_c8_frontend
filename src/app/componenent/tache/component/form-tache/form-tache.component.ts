import { TacheService } from "./../../service/tache.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form-tache",
  templateUrl: "./form-tache.component.html",
  styleUrls: ["./form-tache.component.css"]
})
export class FormTacheComponent implements OnInit {
  form: FormGroup;
  constructor(private tacheService: TacheService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      titre: new FormControl("", Validators.required),
      etat: new FormControl("A faire", Validators.required)
    });
  }

  addTache() {
    if (this.form.valid) {
      this.tacheService.addTache(this.form.value);
      this.initForm();
    } else {
      alert("Veuillez remplir tous les champs! ");
    }
  }
}
