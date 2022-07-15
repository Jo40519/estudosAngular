import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosRotasService } from './cursos/curso-detalhe/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/cursoNaoEncontrado/cursoNaoEncontrado.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      CursosComponent,
      CursoDetalheComponent,
      CursoNaoEncontradoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursosRotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
