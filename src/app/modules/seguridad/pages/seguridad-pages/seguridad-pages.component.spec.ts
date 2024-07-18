import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadPagesComponent } from './seguridad-pages.component';

describe('SeguridadPagesComponent', () => {
  let component: SeguridadPagesComponent;
  let fixture: ComponentFixture<SeguridadPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguridadPagesComponent]
    });
    fixture = TestBed.createComponent(SeguridadPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
