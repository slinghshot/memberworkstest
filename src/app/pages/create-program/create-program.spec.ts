import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgram } from './create-program';

describe('CreateProgram', () => {
  let component: CreateProgram;
  let fixture: ComponentFixture<CreateProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProgram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
