/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlunosDetalheComponent } from './alunos-detalhe.component';

describe('AlunosDetalheComponent', () => {
  let component: AlunosDetalheComponent;
  let fixture: ComponentFixture<AlunosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
