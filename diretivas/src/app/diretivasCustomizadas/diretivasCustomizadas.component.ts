import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivasCustomizadas',
  templateUrl: './diretivasCustomizadas.component.html',
  styleUrls: ['./diretivasCustomizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  public mudarCor: boolean = false
  public mostrarCursos: boolean = false
  constructor() { }

  ngOnInit() {
  }

    MostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }

  mudando() {
    this.mudarCor = !this.mudarCor
  }
}
