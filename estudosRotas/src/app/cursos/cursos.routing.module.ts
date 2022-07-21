import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from '../../../../projetoEstudo/src/app/cursos/cursoDetalhe/cursoDetalhe.component';
import { CursosComponent } from './../../../../servicos/src/app/cursos/cursos.component';
import { CursoNaoEncontradoComponent } from './cursoNaoEncontrado/cursoNaoEncontrado.component';

const cursosRoutes: Routes = [
  {
    path: 'curso',
    component: CursosComponent
  },
  {
    path: 'curso/:id',
    component: CursoDetalheComponent
  },
  {
    path: 'nao-encontrado',
    component: CursoNaoEncontradoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(cursosRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
