import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposPagesComponent } from './equipos-pages.component';

describe('EquiposPagesComponent', () => {
  let component: EquiposPagesComponent;
  let fixture: ComponentFixture<EquiposPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposPagesComponent]
    });
    fixture = TestBed.createComponent(EquiposPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
