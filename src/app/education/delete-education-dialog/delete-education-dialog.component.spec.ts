import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEducationDialogComponent } from './delete-education-dialog.component';

describe('DeleteEducationDialogComponent', () => {
  let component: DeleteEducationDialogComponent;
  let fixture: ComponentFixture<DeleteEducationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEducationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEducationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
