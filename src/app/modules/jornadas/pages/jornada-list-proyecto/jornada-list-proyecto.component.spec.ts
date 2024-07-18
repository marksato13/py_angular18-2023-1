import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaListProyectoComponent } from './jornada-list-proyecto.component';

describe('JornadaListProyectoComponent', () => {
  let component: JornadaListProyectoComponent;
  let fixture: ComponentFixture<JornadaListProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JornadaListProyectoComponent]
    });
    fixture = TestBed.createComponent(JornadaListProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
