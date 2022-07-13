import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  public id: string =''
  public inscricao!: Subscription;
  public cursos: any[] = []
  constructor(private activatedRoute: ActivatedRoute,
    private cursosService: CursosService) {
    // this.id = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    // this.inscricao = this.activatedRoute.params.subscribe(params => {
    //   this.id = params['id']
    // })
    this.cursos = this.cursosService.getCursos();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
