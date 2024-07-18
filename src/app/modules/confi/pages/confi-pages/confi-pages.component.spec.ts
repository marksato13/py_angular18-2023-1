import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiPagesComponent } from './confi-pages.component';

describe('ConfiPagesComponent', () => {
  let component: ConfiPagesComponent;
  let fixture: ComponentFixture<ConfiPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiPagesComponent]
    });
    fixture = TestBed.createComponent(ConfiPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
