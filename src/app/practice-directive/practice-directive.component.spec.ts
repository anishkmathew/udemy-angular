import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDirectiveComponent } from './practice-directive.component';

describe('PracticeDirectiveComponent', () => {
  let component: PracticeDirectiveComponent;
  let fixture: ComponentFixture<PracticeDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
