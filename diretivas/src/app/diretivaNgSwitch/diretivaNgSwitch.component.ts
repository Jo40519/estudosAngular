import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivaNgSwitch',
  templateUrl: './diretivaNgSwitch.component.html',
  styleUrls: ['./diretivaNgSwitch.component.scss']
})
export class DiretivaNgSwitchComponent implements OnInit {


  public aba: string = 'home'
  constructor() { }

  ngOnInit() {
  }

}
