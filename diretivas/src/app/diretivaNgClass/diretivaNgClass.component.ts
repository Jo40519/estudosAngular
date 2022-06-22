import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivaNgClass',
  templateUrl: './diretivaNgClass.component.html',
  styleUrls: ['./diretivaNgClass.component.scss']
})
export class DiretivaNgClassComponent implements OnInit {

  public meuFavorito: boolean = false
  constructor() { }

  ngOnInit() {
  }

  favoritar() {
    this.meuFavorito = !this.meuFavorito
  }

}
