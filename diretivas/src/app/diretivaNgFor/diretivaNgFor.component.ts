import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivaNgFor',
  templateUrl: './diretivaNgFor.component.html',
  styleUrls: ['./diretivaNgFor.component.scss']
})
export class DiretivaNgForComponent implements OnInit {

  public cursos: Array<string> = ['Angular', 'Java', 'TS']
  constructor() { }

  ngOnInit() {
  }

}
