import { TestBed } from '@angular/core/testing';

import { AlfabetoService } from './alfabeto.service';

describe('AlfabetoService', () => {
  let service: AlfabetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfabetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
