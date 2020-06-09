import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshboardCardComponent } from './deshboard-card.component';

describe('DeshboardCardComponent', () => {
  let component: DeshboardCardComponent;
  let fixture: ComponentFixture<DeshboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeshboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
