import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePipeComponent } from './exercise-pipe.component';

describe('ExercisePipeComponent', () => {
  let component: ExercisePipeComponent;
  let fixture: ComponentFixture<ExercisePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
