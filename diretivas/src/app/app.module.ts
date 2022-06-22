import { ExemploNgContendComponent } from './exemplo-ngContend/exemplo-ngContend.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ngIf/diretiva-ngIf.component';
import { DiretivaNgSwitchComponent } from './diretivaNgSwitch/diretivaNgSwitch.component';
import { DiretivaNgForComponent } from './diretivaNgFor/diretivaNgFor.component';
import { DiretivaNgClassComponent } from './diretivaNgClass/diretivaNgClass.component';
import { DiretivaNgStyleComponent } from './diretivaNgStyle/diretivaNgStyle.component';
import { OperadorElvisComponent } from './operadorElvis/operadorElvis.component';

@NgModule({
  declarations: [								
    AppComponent,
      DiretivaNgIfComponent,
      DiretivaNgSwitchComponent,
      DiretivaNgForComponent,
      DiretivaNgClassComponent,
      DiretivaNgStyleComponent,
    OperadorElvisComponent,
      ExemploNgContendComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
