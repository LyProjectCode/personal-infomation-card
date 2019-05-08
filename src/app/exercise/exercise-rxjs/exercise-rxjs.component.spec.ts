import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRxjsComponent } from './exercise-rxjs.component';

describe('ExerciseRxjsComponent', () => {
  let component: ExerciseRxjsComponent;
  let fixture: ComponentFixture<ExerciseRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
