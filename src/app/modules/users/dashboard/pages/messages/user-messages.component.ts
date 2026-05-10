import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MessagesService,
  TrainerMessagingContact,
  TrainerMessagingConversationMessage,
  TrainerMessagingConversationSummary,
} from '../../../services/messages.service';

@Component({
  selector: 'app-user-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css'],
})
export class UserMessagesComponent implements OnInit {
  private messagesService = inject(MessagesService);

  loading = true;
  sending = false;
  errorMessage: string | null = null;

  conversations: TrainerMessagingConversationSummary[] = [];
  contacts: TrainerMessagingContact[] = [];
  selectedConversationId: string | null = null;
  selectedPartnerName = '';
  messages: TrainerMessagingConversationMessage[] = [];
  draftMessage = '';

  ngOnInit(): void {
    this.loadInbox();
  }

  loadInbox(): void {
    this.loading = true;
    this.errorMessage = null;

    this.messagesService.listConversations().subscribe({
      next: (conversations) => {
        this.conversations = conversations;
        this.messagesService.listContacts().subscribe({
          next: (contacts) => {
            this.contacts = contacts;
            if (this.conversations.length > 0) {
              this.openConversation(this.conversations[0].conversationId);
            } else {
              this.loading = false;
            }
          },
          error: () => {
            this.errorMessage = 'Could not load messaging contacts.';
            this.loading = false;
          },
        });
      },
      error: () => {
        this.errorMessage = 'Could not load your conversations.';
        this.loading = false;
      },
    });
  }

  openConversation(conversationId: string): void {
    this.selectedConversationId = conversationId;
    this.loading = true;

    this.messagesService.getMessages(conversationId).subscribe({
      next: (page) => {
        this.messages = [...page.messages].reverse();
        this.selectedPartnerName = `${page.partner.firstName} ${page.partner.lastName}`.trim();
        this.loading = false;
        this.messagesService.markConversationRead(conversationId).subscribe({
          next: () => {
            const target = this.conversations.find((c) => c.conversationId === conversationId);
            if (target) target.unreadCount = 0;
          },
        });
      },
      error: () => {
        this.errorMessage = 'Could not load messages for this conversation.';
        this.loading = false;
      },
    });
  }

  startConversation(partnerId: string): void {
    this.messagesService.createOrGetConversation(partnerId).subscribe({
      next: (conversation) => {
        const exists = this.conversations.some((c) => c.conversationId === conversation.conversationId);
        if (!exists) {
          this.conversations = [conversation, ...this.conversations];
        }
        this.openConversation(conversation.conversationId);
      },
      error: () => {
        this.errorMessage = 'Could not start conversation. Please try again.';
      },
    });
  }

  send(): void {
    const content = this.draftMessage.trim();
    if (!this.selectedConversationId || !content || this.sending) return;

    this.sending = true;
    this.messagesService.sendMessage(this.selectedConversationId, content).subscribe({
      next: (page) => {
        this.messages = [...page.messages].reverse();
        this.draftMessage = '';
        this.sending = false;
      },
      error: () => {
        this.errorMessage = 'Failed to send message.';
        this.sending = false;
      },
    });
  }

  trackByConversationId(_: number, conversation: TrainerMessagingConversationSummary): string {
    return conversation.conversationId;
  }
}
