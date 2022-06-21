import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgIfComponent } from './diretiva-ngIf/diretiva-ngIf.component';
import { DiretivaNgSwitchComponent } from './diretivaNgSwitch/diretivaNgSwitch.component';

@NgModule({
  declarations: [			
    AppComponent,
      DiretivaNgIfComponent,
      DiretivaNgSwitchComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
