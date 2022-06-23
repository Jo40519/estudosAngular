import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivasCustomizadas',
  templateUrl: './diretivasCustomizadas.component.html',
  styleUrls: ['./diretivasCustomizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  public mudarCor: boolean = false

  constructor() { }

  ngOnInit() {
  }


  mudando() {
    this.mudarCor = !this.mudarCor
  }
}
