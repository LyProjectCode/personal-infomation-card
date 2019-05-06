import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseServiceComponent } from './exercise-service.component';

describe('ExerciseServiceComponent', () => {
  let component: ExerciseServiceComponent;
  let fixture: ComponentFixture<ExerciseServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
