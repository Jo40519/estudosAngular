import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosRotasService } from './cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  public id!:number;
  public inscricao!: Subscription;
  public cursos: any[] = [];
  public curso: any;
  constructor(private activatedRoute: ActivatedRoute,
    private cursosService: CursosRotasService,
    private routerService: Router) {
    // this.id = this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe(params => {
      this.id = params['id']

      this.curso = this.cursosService.getCurso(this.id)

      if(this.curso == null) {
        this.routerService.navigate(['/nao-encontrado'])
      }
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
