import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserMessagesComponent } from './user-messages.component';
import { MessagesService } from '../../../services/messages.service';

describe('UserMessagesComponent', () => {
  let component: UserMessagesComponent;
  let fixture: ComponentFixture<UserMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMessagesComponent],
      providers: [
        {
          provide: MessagesService,
          useValue: {
            listConversations: () => of([]),
            listContacts: () => of([]),
            getMessages: () => of({ messages: [], partner: { firstName: '', lastName: '' } }),
            createOrGetConversation: () => of({ conversationId: 'x', partner: { firstName: 'A', lastName: 'B' }, unreadCount: 0, lastMessagePreview: null, lastMessageAt: null }),
            sendMessage: () => of({ messages: [], partner: { firstName: '', lastName: '' } }),
            markConversationRead: () => of({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
