import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadorElvis',
  templateUrl: './operadorElvis.component.html',
  styleUrls: ['./operadorElvis.component.scss']
})
export class OperadorElvisComponent implements OnInit {

  public tarefa: any = {
    desc: 'Descrição da Tarefa',
    responsavel: {
      usuario: {
         nome: null,
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
