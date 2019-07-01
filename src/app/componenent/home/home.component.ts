import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import { ActivatedRoute,Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // meteos;
  // villeSelected;

  // // @Input() book:Book;

  // isAvailable=true;
  // constructor(private meteoService:MeteoService,private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    // this.villeSelected = this.activeRoute.snapshot.paramMap.get('name');
    // this.activeRoute.paramMap.pipe(
    //   switchMap(params => {
    //     this.villeSelected=params.get('name');
    //     return this.meteoService.getAllMeteos();
    //   })
    // ).subscribe(meteos => this.meteos=meteos );
    
    //  console.log("meteos",this.meteos);
  }

  // onSelect(met){
  //   this.router.navigate(['/details',met.nameVille])
  // }
}