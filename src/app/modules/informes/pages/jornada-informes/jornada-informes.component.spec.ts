import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaInformesComponent } from './jornada-informes.component';

describe('JornadaInformesComponent', () => {
  let component: JornadaInformesComponent;
  let fixture: ComponentFixture<JornadaInformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JornadaInformesComponent]
    });
    fixture = TestBed.createComponent(JornadaInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
