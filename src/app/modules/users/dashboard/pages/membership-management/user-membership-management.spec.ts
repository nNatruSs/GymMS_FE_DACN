import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMembershipManagementComponent } from './user-membership-management.component';

describe('UserMembershipManagementComponent', () => {
  let component: UserMembershipManagementComponent;
  let fixture: ComponentFixture<UserMembershipManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMembershipManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMembershipManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
