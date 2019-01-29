import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubspaceMainComponent } from './subspace-main.component';

describe('SubspaceMainComponent', () => {
  let component: SubspaceMainComponent;
  let fixture: ComponentFixture<SubspaceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubspaceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubspaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
