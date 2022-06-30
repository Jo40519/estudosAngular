import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Array<string> = ['Angular', 'Java', 'JavaScript']
  constructor() { }
  

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso)
  }

}
