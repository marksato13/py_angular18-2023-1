import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProyectoComponent } from './view-proyecto.component';

describe('ViewProyectoComponent', () => {
  let component: ViewProyectoComponent;
  let fixture: ComponentFixture<ViewProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProyectoComponent]
    });
    fixture = TestBed.createComponent(ViewProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
