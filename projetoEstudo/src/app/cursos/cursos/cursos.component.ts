import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public nomePortal: string;
  public cursos: Array<string> = []
  constructor(private cursoService: CursosService) {
    this.nomePortal = 'https://loiane.training'

    this.cursos =  this.cursoService.getCursos()
  }

  ngOnInit() {

  }

}
