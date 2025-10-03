import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendListItem } from './studend-list-item';

describe('StudendListItem', () => {
  let component: StudendListItem;
  let fixture: ComponentFixture<StudendListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudendListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudendListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
