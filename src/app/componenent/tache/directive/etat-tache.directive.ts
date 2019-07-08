import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[appEtatTache]"
})
export class EtatTacheDirective {
  @Input() etat: string;
  constructor(private el?: ElementRef) {}
  ngOnInit() {
    if (this.etat == "A faire")
      this.el.nativeElement.style.backgroundColor = "#33b5e5";
    else if (this.etat == "En cours")
      this.el.nativeElement.style.backgroundColor = "#ffbb33";
    else if (this.etat == "Terminer") {
      this.el.nativeElement.style.backgroundColor = "#00C851";
    }
  }

  @HostListener("mouseenter") onMouseEnter() {
    console.log(this.etat);
  }
}
