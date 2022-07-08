import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltroArrayPipe } from './filtroArray.pipe';
import { FiltroArrayImpuroPipe } from './filtroArrayImpuro.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
