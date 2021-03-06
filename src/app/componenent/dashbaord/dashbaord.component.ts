import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { ActivatedRoute,Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Meteo } from 'src/app/model/meteo';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {

  meteos;
  villeSelected;

  // @Input() book:Book;

  isAvailable=true;
  constructor(private meteoService:MeteoService,private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    // this.villeSelected = this.activeRoute.snapshot.paramMap.get('name');
    this.activeRoute.paramMap.pipe(
      switchMap(params => {
        this.villeSelected=params.get('name');
        return this.meteoService.getAllMeteos();
      })
    ).subscribe(meteos => this.meteos=meteos );
    
     console.log("meteos",this.meteos);
  }

  receiveToMyChild(name:string){
    this.router.navigate(['/details',name])
  }

}
