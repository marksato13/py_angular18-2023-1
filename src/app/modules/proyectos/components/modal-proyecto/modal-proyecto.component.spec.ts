import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectoComponent } from './modal-proyecto.component';

describe('ModalProyectoComponent', () => {
  let component: ModalProyectoComponent;
  let fixture: ComponentFixture<ModalProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProyectoComponent]
    });
    fixture = TestBed.createComponent(ModalProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
