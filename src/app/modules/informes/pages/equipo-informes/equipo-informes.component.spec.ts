import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoInformesComponent } from './equipo-informes.component';

describe('EquipoInformesComponent', () => {
  let component: EquipoInformesComponent;
  let fixture: ComponentFixture<EquipoInformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoInformesComponent]
    });
    fixture = TestBed.createComponent(EquipoInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
