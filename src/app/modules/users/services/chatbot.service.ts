import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = 'https://gms-backend-lc61.onrender.com/api/v1';

export interface ChatbotMessage {
  id: string;
  sessionId?: string;
  role: 'MEMBER' | 'ASSISTANT' | 'SYSTEM' | string;
  content: string;
  createdAt: string;
}

export interface ChatbotSessionPayload {
  sessionId: string;
  status?: string;
  greetingMessage?: string;
  suggestedTopics?: string[];
  messages?: ChatbotMessage[];
}

export interface ChatbotSendReply {
  assistantMessage: string;
  intentKey?: string | null;
  source?: string;
  linkedActions?: string[];
  suggestedTopics?: string[];
  handoffSuggested?: boolean;
  sessionId: string;
}

@Injectable({ providedIn: 'root' })
export class ChatbotService {
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

  getActiveSession() {
    return this.http
      .get<any>(`${BASE_URL}/chatbot/session/active`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<ChatbotSessionPayload | null>(res)));
  }

  createOrGetSession() {
    return this.http
      .post<any>(`${BASE_URL}/chatbot/session`, {}, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<ChatbotSessionPayload>(res)));
  }

  getMessages(sessionId: string) {
    return this.http
      .get<any>(`${BASE_URL}/chatbot/session/${sessionId}/messages`, { headers: this.authHeaders() })
      .pipe(
        map((res) => this.unwrapData<any>(res)),
        map((data) => {
          // Support both shapes:
          // 1) { sessionId, status, messages: [...] }
          // 2) legacy direct array [...]
          if (Array.isArray(data)) return data as ChatbotMessage[];
          if (Array.isArray(data?.messages)) return data.messages as ChatbotMessage[];
          return [];
        })
      );
  }

  sendMessage(sessionId: string, message: string) {
    return this.http
      .post<any>(
        `${BASE_URL}/chatbot/session/${sessionId}/messages`,
        { message },
        { headers: this.authHeaders() }
      )
      .pipe(map((res) => this.unwrapData<ChatbotSendReply>(res)));
  }

  closeSession(sessionId: string) {
    return this.http.post<any>(
      `${BASE_URL}/chatbot/session/${sessionId}/close`,
      {},
      { headers: this.authHeaders() }
    );
  }
}
