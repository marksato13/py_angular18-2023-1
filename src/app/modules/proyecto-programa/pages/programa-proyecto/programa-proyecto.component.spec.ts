import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaProyectoComponent } from './programa-proyecto.component';

describe('ProgramaProyectoComponent', () => {
  let component: ProgramaProyectoComponent;
  let fixture: ComponentFixture<ProgramaProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramaProyectoComponent]
    });
    fixture = TestBed.createComponent(ProgramaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
