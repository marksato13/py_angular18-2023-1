import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposAddComponent } from './equipos-add.component';

describe('EquiposAddComponent', () => {
  let component: EquiposAddComponent;
  let fixture: ComponentFixture<EquiposAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposAddComponent]
    });
    fixture = TestBed.createComponent(EquiposAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
