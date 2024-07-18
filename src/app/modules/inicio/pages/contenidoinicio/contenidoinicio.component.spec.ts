import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoinicioComponent } from './contenidoinicio.component';

describe('ContenidoinicioComponent', () => {
  let component: ContenidoinicioComponent;
  let fixture: ComponentFixture<ContenidoinicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoinicioComponent]
    });
    fixture = TestBed.createComponent(ContenidoinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
