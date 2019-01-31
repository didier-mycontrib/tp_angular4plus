import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpectacleComponent } from './admin-spectacle.component';

describe('AdminSpectacleComponent', () => {
  let component: AdminSpectacleComponent;
  let fixture: ComponentFixture<AdminSpectacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpectacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpectacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
