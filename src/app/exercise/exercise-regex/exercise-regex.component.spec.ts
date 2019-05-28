import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRegexComponent } from './exercise-regex.component';

describe('ExerciseRegexComponent', () => {
  let component: ExerciseRegexComponent;
  let fixture: ComponentFixture<ExerciseRegexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseRegexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseRegexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
