import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosComponent } from "./alunos.component";

const alunosRoute: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      {
        path:'novo',
        component: AlunoFormComponent
      },
      {
        path: ':id',
        component: AlunosDetalheComponent
      },
      {
        path: ':id/edit',
        component: AlunoFormComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(alunosRoute)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {}
