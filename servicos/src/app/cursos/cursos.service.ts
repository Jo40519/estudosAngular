import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  private cursos: Array<string> = ['Angular', 'Java', 'JavaScript']
  constructor(private logService: LogService) { }
  

  getCursos() {
    this.logService.consoleLog('Obtendo lista de Cursos')
    return this.cursos;
  }

  addCursos(curso: string) {
    this.logService.consoleLog(`Criando um novo ${curso}`)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
  }

}
