import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngIf',
  templateUrl: './diretiva-ngIf.component.html',
  styleUrls: ['./diretiva-ngIf.component.scss']
})
export class DiretivaNgIfComponent implements OnInit {

  public cursos: Array<string> = ['Olá'];
  public mostrarCursos: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onMostrarCurso() {
    this.mostrarCursos = !this.mostrarCursos
  }
}
