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

export interface TrainerClientLinkView {
  id: string;
  trainerId: string;
  memberId: string;
  status: string;
  linkedAt: string;
  endedAt: string | null;
  endReason: string | null;
  member: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface TrainerAvailabilitySlot {
  id?: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface TrainerBookingSlot {
  id: string;
  memberId: string;
  trainerId: string;
  startAt: string;
  endAt: string;
  status: string;
  notes?: string | null;
  member?: {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  } | null;
}

export interface TrainerClassScheduleBlock {
  scheduleId: string;
  className: string;
  dayOfWeek: string | null;
  startTime: string;
  endTime: string;
}

export interface ScheduleExceptionView {
  id: string;
  scheduleId: string;
  exceptionDate: string;
  type: 'CANCELLED' | 'RESCHEDULED' | string;
  reason: string | null;
  newStartTime: string | null;
  newEndTime: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
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

  private formatTime(value: string): string {
    if (!value) return '';
    const trimmed = String(value).trim();
    if (/^\d{2}:\d{2}/.test(trimmed)) return trimmed.slice(0, 5);

    const parsed = new Date(trimmed);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(11, 16);
    }

    return trimmed.length >= 5 ? trimmed.slice(0, 5) : trimmed;
  }

  listTrainerClients() {
    return this.http
      .get<any>(`${BASE_URL}/trainer/me/clients`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<TrainerClientLinkView[]>(res) ?? []));
  }

  getAvailability(trainerId: string) {
    return this.http
      .get<any>(`${BASE_URL}/trainer/${trainerId}/availability`, { headers: this.authHeaders() })
      .pipe(
        map((res) => this.unwrapData<{ trainerId: string; availability: TrainerAvailabilitySlot[] }>(res)),
        map((payload) =>
          (payload?.availability ?? []).map((slot) => ({
            ...slot,
            startTime: this.formatTime(slot.startTime),
            endTime: this.formatTime(slot.endTime),
          }))
        )
      );
  }

  setAvailability(trainerId: string, slots: TrainerAvailabilitySlot[]) {
    const dayEnum = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const payload = {
      slots: slots.map((s) => ({
        dayOfWeek: dayEnum[s.dayOfWeek],
        startTime: this.formatTime(s.startTime),
        endTime: this.formatTime(s.endTime),
        isAvailable: s.isAvailable,
      })),
    };

    return this.http
      .put<any>(`${BASE_URL}/trainer/${trainerId}/availability`, payload, {
        headers: this.authHeaders(),
      })
      .pipe(map((res) => this.unwrapData<{ availability: TrainerAvailabilitySlot[] }>(res)));
  }

  deleteAvailabilitySlot(trainerId: string, slotId: string) {
    return this.http.delete<any>(`${BASE_URL}/trainer/${trainerId}/availability/${slotId}`, {
      headers: this.authHeaders(),
    });
  }

  getTrainerMyBookings() {
    return this.http
      .get<any>(`${BASE_URL}/trainer-bookings/trainer/me`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<TrainerBookingSlot[]>(res) ?? []));
  }

  getTrainerClassSchedules(trainerId: string) {
    return this.http
      .get<any>(`${BASE_URL}/class-schedule/list?page=1&limit=100&trainerId=${trainerId}`, {
        headers: this.authHeaders(),
      })
      .pipe(
        map((res) => this.unwrapData<any>(res)),
        map((data) => (data?.docs ?? data ?? [])),
        map((docs: any[]) =>
          docs.map((s) => ({
            scheduleId: s.id,
            className: s.className ?? 'Class',
            dayOfWeek: s.dayOfWeek ?? null,
            startTime: this.formatTime(s.startTime),
            endTime: this.formatTime(s.endTime),
          })) as TrainerClassScheduleBlock[]
        )
      );
  }

  getScheduleExceptions(scheduleId: string) {
    return this.http
      .get<any>(`${BASE_URL}/class-schedule/${scheduleId}/exceptions`, {
        headers: this.authHeaders(),
      })
      .pipe(
        map((res) => this.unwrapData<any[]>(res) ?? []),
        map(
          (exceptions) =>
            exceptions.map((e) => ({
              id: e.id,
              scheduleId: e.scheduleId,
              exceptionDate: e.exceptionDate,
              type: e.type,
              reason: e.reason ?? null,
              newStartTime: e.newStartTime ? this.formatTime(e.newStartTime) : null,
              newEndTime: e.newEndTime ? this.formatTime(e.newEndTime) : null,
            })) as ScheduleExceptionView[]
        )
      );
  }

  listConversations() {
    return this.http
      .get<any>(`${BASE_URL}/trainer-messaging/conversations`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary[]>(res) ?? []));
  }

  listContacts() {
    return this.http
      .get<any>(`${BASE_URL}/trainer-messaging/contacts`, { headers: this.authHeaders() })
      .pipe(map((res) => this.unwrapData<TrainerMessagingParticipant[]>(res) ?? []));
  }

  createOrGetConversation(partnerId: string) {
    return this.http
      .post<any>(`${BASE_URL}/trainer-messaging/conversations`, { partnerId }, { headers: this.authHeaders() })
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
