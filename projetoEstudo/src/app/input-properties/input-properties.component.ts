import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.scss']
})
export class InputPropertiesComponent implements OnInit {


  @Input() nomeCurso: string =''

  constructor() { }

  ngOnInit() {
  }

}
