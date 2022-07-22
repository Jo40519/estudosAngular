import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {



  private alunos:any[] = [
    {
      id: 2,
      nome: 'Aluno01',
      email: 'aluno01@email.com'
    },
    {
      id: 2,
      nome: 'Aluno02',
      email: 'aluno01@email.com'
    },
    {
      id: 2,
      nome: 'Aluno02',
      email: 'aluno01@email.com'
    }
  ];

constructor() { }


getAlunos() {
  return this.alunos;
}
}
