import { FiltroArrayImpuroPipe } from './filtroArrayImpuro.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayPipe } from './filtroArray.pipe';
import { SettingsService } from './settings.service';
import { CamelCasePipe } from './camel-case.pipe';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

@NgModule({
  declarations: [
      AppComponent,
      CamelCasePipe,
      ExemplosPipesComponent,
      FiltroArrayPipe,
      FiltroArrayImpuroPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // },
    SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   deps: [
    //     SettingsService
    //   ],
    //   useFactory: (settingsService:any) =>
    //   settingsService.getLocale()

    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
