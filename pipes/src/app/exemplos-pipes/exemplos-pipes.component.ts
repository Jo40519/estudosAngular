import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


  public filter: string = ''
  public livros: Array<String> = ['Java', 'Angular 2']
  public livro = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2019, 3, 11)
  }

  valueAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Valor assícrono')
    }, 2000)
  })

  valueAsync2 = Observable
  constructor() { }

  ngOnInit() {
  }

  addCurso(curso: string) {
    this.livros.push(curso)
  }

  tiraCurso() {
    this.livros.pop()
  }

}
