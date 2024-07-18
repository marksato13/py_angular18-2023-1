import { TestBed } from '@angular/core/testing';

import { ProgramaProyectoService } from './programa-proyecto.service';

describe('ProgramaProyectoService', () => {
  let service: ProgramaProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramaProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
