import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunosComponent } from "./alunos.component";

const alunosRoute: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent
  },
  {
    path:'alunos/novo',
    component: AlunoFormComponent
  },
  {
    path: 'alunos/:id',
    component: AlunosDetalheComponent
  },
  {
    path: 'alunos/:id/edit',
    component: AlunoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoute)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {}
