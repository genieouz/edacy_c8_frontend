import { TacheService } from "./../../service/tache.service";
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form-tache",
  templateUrl: "./form-tache.component.html",
  styleUrls: ["./form-tache.component.css"]
})
export class FormTacheComponent implements OnInit {
  @Input() tache;
  form: FormGroup;
  constructor(private tacheService: TacheService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let titre = "",
      etat = "A faire";
    if (this.tache) {
      titre = this.tache.titre;
      etat = this.tache.etat;
    }
    this.form = new FormGroup({
      titre: new FormControl(titre, [
        Validators.required,
        Validators.minLength(2)
      ]),
      etat: new FormControl(etat, Validators.required),
      description: new FormControl("", [
        Validators.required,
        ,
        Validators.minLength(5)
      ])
    });
  }

  get titre() {
    return this.form.get("titre");
  }

  get description() {
    return this.form.get("description");
  }
  ngOnChange() {
    console.log("change ", this.tache);
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
