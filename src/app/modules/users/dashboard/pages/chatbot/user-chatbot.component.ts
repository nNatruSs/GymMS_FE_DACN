import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatbotMessage, ChatbotService } from '../../../services/chatbot.service';

@Component({
  selector: 'app-user-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-chatbot.component.html',
  styleUrl: './user-chatbot.component.css',
})
export class UserChatbotComponent {
  loading = true;
  sending = false;
  refreshing = false;
  errorMessage: string | null = null;
  sessionId: string | null = null;
  draft = '';
  messages: ChatbotMessage[] = [];
  suggestedTopics: string[] = [];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
    this.chatbotService.getActiveSession().subscribe({
      next: (active) => {
        if (active?.sessionId) {
          this.sessionId = active.sessionId;
          this.messages = active.messages ?? [];
          this.loading = false;
          return;
        }
        this.createOrGetSession();
      },
      error: () => this.createOrGetSession(),
    });
  }

  private createOrGetSession(): void {
    this.chatbotService.createOrGetSession().subscribe({
      next: (session) => {
        this.sessionId = session?.sessionId ?? null;
        this.messages = session?.messages ?? [];
        this.suggestedTopics = session?.suggestedTopics ?? [];
        this.loading = false;
        if (!this.sessionId) this.errorMessage = 'Could not initialize chatbot session.';
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Could not initialize chatbot session.';
      },
    });
  }

  send(): void {
    const message = this.draft.trim();
    if (!this.sessionId || !message || this.sending) return;

    const memberMessage: ChatbotMessage = {
      id: crypto.randomUUID(),
      role: 'MEMBER',
      content: message,
      createdAt: new Date().toISOString(),
      sessionId: this.sessionId,
    };
    this.messages = [...this.messages, memberMessage];

    this.sending = true;
    this.errorMessage = null;
    this.draft = '';

    this.chatbotService.sendMessage(this.sessionId, message).subscribe({
      next: (reply) => {
        const assistantMessage: ChatbotMessage = {
          id: crypto.randomUUID(),
          role: 'ASSISTANT',
          content: reply?.assistantMessage ?? 'I could not generate a response right now.',
          createdAt: new Date().toISOString(),
          sessionId: this.sessionId ?? undefined,
        };
        this.messages = [...this.messages, assistantMessage];
        if (reply?.suggestedTopics?.length) {
          this.suggestedTopics = reply.suggestedTopics;
        }
        this.sending = false;
      },
      error: () => {
        this.sending = false;
        this.errorMessage = 'Could not send message.';
        this.loadMessagesFromServer();
      },
    });
  }

  sendSuggestedTopic(topic: string): void {
    if (this.sending) return;
    this.draft = topic;
    this.send();
  }

  refreshSession(): void {
    if (this.refreshing || this.loading) return;
    this.refreshing = true;
    this.errorMessage = null;

    const close$ = this.sessionId
      ? this.chatbotService.closeSession(this.sessionId)
      : null;

    const runCreate = () => {
      this.sessionId = null;
      this.messages = [];
      this.suggestedTopics = [];
      this.loading = true;
      this.createOrGetSession();
      this.refreshing = false;
    };

    if (!close$) {
      runCreate();
      return;
    }

    close$.subscribe({
      next: () => runCreate(),
      error: () => {
        // Even if close fails (expired/already closed), still try to create new session.
        runCreate();
      },
    });
  }

  private loadMessagesFromServer(): void {
    if (!this.sessionId) return;
    this.chatbotService.getMessages(this.sessionId).subscribe({
      next: (messages) => {
        this.messages = messages;
      },
    });
  }

  isAssistant(role: string): boolean {
    const normalized = role?.toUpperCase();
    return normalized === 'ASSISTANT' || normalized === 'SYSTEM';
  }
}
