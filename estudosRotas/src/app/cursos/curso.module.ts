import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRotasService } from './curso-detalhe/cursos.service';
import { CursoNaoEncontradoComponent } from './cursoNaoEncontrado/cursoNaoEncontrado.component';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations:[
    CursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent
  ],
  exports:[],
  providers: [CursosRotasService]

})
export class CursoModule {}
