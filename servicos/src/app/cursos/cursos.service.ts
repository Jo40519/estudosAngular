import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  private cursos: Array<string> = ['Angular', 'Java', 'JavaScript']
  constructor() { }
  

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
  }

}
