import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  private pizzas: any = [
    {id: "1",  nom: "Reine", taille: "moyenne", description: ""},
    {id: "2", nom: "Reine", taille: "grande", description: ""},
    {id: "3", nom: "Bolognaise", taille: "moyenne", description: ""},
    {id: "4", nom: "Bolognaise", taille: "grande", description: ""},
    {id: "5", nom: "Margarita", taille: "moyenne", description: ""},
    {id: "6", nom: "Margarita", taille: "grande", description: ""}
  ] 
  constructor() { }
  getPizzas(){
    return this.pizzas;
  }

  addPizza(newPizza){
    this.pizzas.push(newPizza);
  }

  supprimer(id){
    this.pizzas.map((pizza,index)=>{
      if(pizza.id == id)
        this.pizzas.splice(index,1);
    })
  }

  editPizza(id,newData){
    this.pizzas.map((pizza,index)=>{
      if(pizza.id==id){
        this.pizzas[index]=newData;
      }
    })
  }
}
