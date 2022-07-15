import { Component, OnInit } from '@angular/core';
import { CursosRotasService } from './curso-detalhe/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public cursos: Array<any>  = [];
  public pagina!: number
  constructor(private cursoService: CursosRotasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.route.queryParams.subscribe((queryParams) => {
      this.pagina = queryParams['pagina']
    })
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/curso'], {queryParams: {
      'pagina': ++this.pagina
    }})
  }
}
