import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFormComponent } from './with-form.component';

describe('WithFormComponent', () => {
  let component: WithFormComponent;
  let fixture: ComponentFixture<WithFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
