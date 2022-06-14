import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnChanges, OnDestroy {


      @Input() valorInicial = 10

  constructor() {
    this.log('constructor')
   }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanfe')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }


    ngAfterViewChecked() {
      this.log('ngAfterViewChecked')
    }

    ngOnDestroy() {
      this.log('ngOnDestroy')
    }


  private log(hook: string) {
    console.log(hook)
  }
}
