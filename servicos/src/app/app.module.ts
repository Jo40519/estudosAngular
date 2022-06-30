import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criarCurso/criarCurso.component';

@NgModule({
  declarations: [		
      AppComponent,
      CursosComponent,
      CriarCursoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
