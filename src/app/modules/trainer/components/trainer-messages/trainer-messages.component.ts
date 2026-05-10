import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TrainerMessagingConversationMessage,
  TrainerMessagingConversationSummary,
  TrainerMessagingParticipant,
  TrainerService,
} from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-messages.component.html',
  styleUrl: './trainer-messages.component.css',
})
export class TrainerMessagesComponent {
  loading = true;
  sending = false;
  errorMessage: string | null = null;

  conversations: TrainerMessagingConversationSummary[] = [];
  contacts: TrainerMessagingParticipant[] = [];
  selectedConversationId: string | null = null;
  selectedPartnerName = '';
  messages: TrainerMessagingConversationMessage[] = [];
  draftMessage = '';

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.loadInbox();
  }

  loadInbox(): void {
    this.loading = true;
    this.errorMessage = null;

    this.trainerService.listConversations().subscribe({
      next: (conversations) => {
        this.conversations = conversations;
        this.trainerService.listContacts().subscribe({
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

    this.trainerService.getMessages(conversationId).subscribe({
      next: (page) => {
        this.messages = [...page.messages].reverse();
        this.selectedPartnerName = `${page.partner.firstName} ${page.partner.lastName}`.trim();
        this.loading = false;
        this.trainerService.markConversationRead(conversationId).subscribe();
      },
      error: () => {
        this.errorMessage = 'Could not load messages for this conversation.';
        this.loading = false;
      },
    });
  }

  startConversation(partnerId: string): void {
    this.trainerService.createOrGetConversation(partnerId).subscribe({
      next: (conversation) => {
        const exists = this.conversations.some((c) => c.conversationId === conversation.conversationId);
        if (!exists) this.conversations = [conversation, ...this.conversations];
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
    this.trainerService.sendMessage(this.selectedConversationId, content).subscribe({
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
