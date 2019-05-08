import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseMapComponent } from './exercise-map.component';

describe('ExerciseMapComponent', () => {
  let component: ExerciseMapComponent;
  let fixture: ComponentFixture<ExerciseMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
