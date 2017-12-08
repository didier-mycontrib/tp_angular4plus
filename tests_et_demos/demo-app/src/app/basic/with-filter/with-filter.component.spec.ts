import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFilterComponent } from './with-filter.component';

describe('WithFilterComponent', () => {
  let component: WithFilterComponent;
  let fixture: ComponentFixture<WithFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
