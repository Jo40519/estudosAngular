import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivaNgStyle',
  templateUrl: './diretivaNgStyle.component.html',
  styleUrls: ['./diretivaNgStyle.component.scss']
})
export class DiretivaNgStyleComponent implements OnInit {


  public ativo: boolean = false
  public tamanhoFont: number = 10
  constructor() { }

  ngOnInit() {
  }
  ativar() {
    this.ativo = !this.ativo
    this.tamanhoFont++
    }
}
