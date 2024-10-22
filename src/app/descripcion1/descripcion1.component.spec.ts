import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Descripcion1Component } from './descripcion1.component';

describe('Descripcion1Component', () => {
  let component: Descripcion1Component;
  let fixture: ComponentFixture<Descripcion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Descripcion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Descripcion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
