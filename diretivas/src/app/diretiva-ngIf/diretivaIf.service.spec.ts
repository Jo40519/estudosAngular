/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiretivaIfService } from './diretivaIf.service';

describe('Service: DiretivaIf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivaIfService]
    });
  });

  it('should ...', inject([DiretivaIfService], (service: DiretivaIfService) => {
    expect(service).toBeTruthy();
  }));
});
