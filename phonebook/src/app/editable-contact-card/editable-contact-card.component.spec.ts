import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableContactCardComponent } from './editable-contact-card.component';

describe('EditableContactCardComponent', () => {
  let component: EditableContactCardComponent;
  let fixture: ComponentFixture<EditableContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableContactCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
