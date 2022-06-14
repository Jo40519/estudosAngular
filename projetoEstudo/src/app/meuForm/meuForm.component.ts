import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meuForm',
  templateUrl: './meuForm.component.html',
  styleUrls: ['./meuForm.component.scss']
})
export class MeuFormComponent implements OnInit {
  public nome: string = ''
  public pessoa: any = {
    nome: '',
    idade: 12
  }
  constructor() { }

  ngOnInit() {
  }

}
