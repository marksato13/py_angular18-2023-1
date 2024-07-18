import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoInformesComponent } from './proyecto-informes.component';

describe('ProyectoInformesComponent', () => {
  let component: ProyectoInformesComponent;
  let fixture: ComponentFixture<ProyectoInformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoInformesComponent]
    });
    fixture = TestBed.createComponent(ProyectoInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
