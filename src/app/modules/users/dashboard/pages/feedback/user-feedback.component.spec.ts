import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserFeedbackComponent } from './user-feedback.component';
import { SupportService } from '../../../services/support.service';

describe('UserFeedbackComponent', () => {
  let component: UserFeedbackComponent;
  let fixture: ComponentFixture<UserFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFeedbackComponent],
      providers: [
        {
          provide: SupportService,
          useValue: { submitFeedback: () => of({}) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
