import { TestBed } from '@angular/core/testing';

import { PilhaService } from './pilha.service';

describe('PilhaService', () => {
  let service: PilhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
