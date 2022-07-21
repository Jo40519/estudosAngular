import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosRotasService } from './cursos/curso-detalhe/cursos.service';
import { CursosModule } from './../../../projetoEstudo/src/app/cursos/cursos.module';
import { RouterModule } from '@angular/router';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      // CursosComponent,
      // CursoDetalheComponent,
      // CursoNaoEncontradoComponent
   ],
  imports: [
  BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [CursosRotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
