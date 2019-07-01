import { TesteService } from './../services/teste.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  pizzas: any = [];
  nom: string;
  taille: string;
  description: string;
  pizzaToUpdate;
  constructor(private testeService: TesteService) { }

  ngOnInit() {
    this.pizzas = this.testeService.getPizzas();
  }
  addPizza(){
    let newPizza = {
      nom: this.nom, 
      taille: this.taille, 
      description: this.description
    }
    this.testeService.addPizza(newPizza);
  }
  supprimer(id){
    this.testeService.supprimer(id);
  }

  reInitializeForm(pizza){
    this.nom = pizza.nom;
    this.description = pizza.description;
    this.taille = pizza.taille;
    this.pizzaToUpdate = pizza;
  }
  editPizza(){
    
  }
}
