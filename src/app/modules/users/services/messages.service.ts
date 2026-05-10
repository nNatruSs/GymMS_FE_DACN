import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface TrainerMessagingParticipant {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface TrainerMessagingContact extends TrainerMessagingParticipant {
  conversationId: string | null;
}

export interface TrainerMessagingConversationSummary {
  conversationId: string;
  partner: TrainerMessagingParticipant;
  lastMessageAt: string | null;
  lastMessagePreview: string | null;
  unreadCount: number;
}

export interface TrainerMessagingConversationMessage {
  id: string;
  senderUserId: string;
  content: string;
  createdAt: string;
  isOwn: boolean;
}

export interface TrainerMessagingConversationMessagesPage {
  conversationId: string;
  partner: TrainerMessagingParticipant;
  unreadCount: number;
  nextCursor: string | null;
  messages: TrainerMessagingConversationMessage[];
}

@Injectable({ providedIn: 'root' })
export class MessagesService {
  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {}

  private authHeaders() {
    return new HttpHeaders({ Authorization: `Bearer ${this.storage.getToken()}` });
  }

  private unwrapData<T>(response: any): T {
    return (response?.data ?? response) as T;
  }

  listContacts() {
    return this.http
      .get<any>(`${BASE_URL}/trainer-messaging/contacts`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<TrainerMessagingContact[]>(res) ?? []));
  }

  listConversations() {
    return this.http
      .get<any>(`${BASE_URL}/trainer-messaging/conversations`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary[]>(res) ?? []));
  }

  createOrGetConversation(partnerId: string) {
    return this.http
      .post<any>(
        `${BASE_URL}/trainer-messaging/conversations`,
        { partnerId },
        { headers: this.authHeaders() }
      )
      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary>(res)));
  }

  getMessages(conversationId: string, limit = 50) {
    return this.http
      .get<any>(`${BASE_URL}/trainer-messaging/conversations/${conversationId}/messages?limit=${limit}`, {
        headers: this.authHeaders(),
      })
      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationMessagesPage>(res)));
  }

  sendMessage(conversationId: string, content: string) {
    return this.http
      .post<any>(
        `${BASE_URL}/trainer-messaging/conversations/${conversationId}/messages`,
        { content },
        { headers: this.authHeaders() }
      )
      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationMessagesPage>(res)));
  }

  markConversationRead(conversationId: string) {
    return this.http.post<any>(
      `${BASE_URL}/trainer-messaging/conversations/${conversationId}/read`,
      {},
      { headers: this.authHeaders() }
    );
  }
}
