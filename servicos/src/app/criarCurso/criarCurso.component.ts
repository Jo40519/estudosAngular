import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criarCurso',
  templateUrl: './criarCurso.component.html',
  styleUrls: ['./criarCurso.component.css']
})
export class CriarCursoComponent implements OnInit {

  public cursos: Array<String> = []
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()
  }

  onAdd(curso: string) {
   this.cursosService.addCursos(curso)
  }

}
