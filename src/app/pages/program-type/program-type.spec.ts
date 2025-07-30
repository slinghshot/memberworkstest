import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramType } from './program-type';

describe('ProgramType', () => {
  let component: ProgramType;
  let fixture: ComponentFixture<ProgramType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
