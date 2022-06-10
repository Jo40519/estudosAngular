import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public valorAtual: string = '';
  public valorSalvo: string =''
  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('Clicado')
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log()
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor
  }
}
