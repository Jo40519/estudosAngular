import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoValorInput: ElementRef | undefined

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    console.log(this.campoValorInput?.nativeElement.value)
    this.valor++
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa() {
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }

}