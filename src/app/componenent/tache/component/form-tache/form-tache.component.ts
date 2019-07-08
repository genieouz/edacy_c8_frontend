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
      titre: new FormControl(titre, Validators.required),
      etat: new FormControl(etat, Validators.required)
    });
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
