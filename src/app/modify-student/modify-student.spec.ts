import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStudent } from './modify-student';

describe('ModifyStudent', () => {
  let component: ModifyStudent;
  let fixture: ComponentFixture<ModifyStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
