# Explanation: `src/app/modules/users/services/messages.service.ts`

## File Overview
- **Relative path:** `src/app/modules/users/services/messages.service.ts`
- **Total lines:** `104`
- **Non-empty lines:** `90`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `7`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Injectable } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { HttpClient, HttpHeaders } from '@angular/common/http';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { map } from 'rxjs/operators';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { StorageService } from '../../../auth/services/storage/storage.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { API_BASE_URL as BASE_URL } from '../../../core/constants/api.constants';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `export interface TrainerMessagingParticipant {` | Exports symbols so other files can import this logic. |
| 8 | `  id: string;` | CSS declaration assigning a style property value. |
| 9 | `  firstName: string;` | CSS declaration assigning a style property value. |
| 10 | `  lastName: string;` | CSS declaration assigning a style property value. |
| 11 | `  avatarUrl: string \| null;` | CSS declaration assigning a style property value. |
| 12 | `}` | Closes the current code/style block scope. |
| 13 | `` | Blank line used to separate logical blocks for readability. |
| 14 | `export interface TrainerMessagingContact extends TrainerMessagingParticipant {` | Exports symbols so other files can import this logic. |
| 15 | `  conversationId: string \| null;` | CSS declaration assigning a style property value. |
| 16 | `}` | Closes the current code/style block scope. |
| 17 | `` | Blank line used to separate logical blocks for readability. |
| 18 | `export interface TrainerMessagingConversationSummary {` | Exports symbols so other files can import this logic. |
| 19 | `  conversationId: string;` | CSS declaration assigning a style property value. |
| 20 | `  partner: TrainerMessagingParticipant;` | CSS declaration assigning a style property value. |
| 21 | `  lastMessageAt: string \| null;` | CSS declaration assigning a style property value. |
| 22 | `  lastMessagePreview: string \| null;` | CSS declaration assigning a style property value. |
| 23 | `  unreadCount: number;` | CSS declaration assigning a style property value. |
| 24 | `}` | Closes the current code/style block scope. |
| 25 | `` | Blank line used to separate logical blocks for readability. |
| 26 | `export interface TrainerMessagingConversationMessage {` | Exports symbols so other files can import this logic. |
| 27 | `  id: string;` | CSS declaration assigning a style property value. |
| 28 | `  senderUserId: string;` | CSS declaration assigning a style property value. |
| 29 | `  content: string;` | CSS declaration assigning a style property value. |
| 30 | `  createdAt: string;` | CSS declaration assigning a style property value. |
| 31 | `  isOwn: boolean;` | CSS declaration assigning a style property value. |
| 32 | `}` | Closes the current code/style block scope. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `export interface TrainerMessagingConversationMessagesPage {` | Exports symbols so other files can import this logic. |
| 35 | `  conversationId: string;` | CSS declaration assigning a style property value. |
| 36 | `  partner: TrainerMessagingParticipant;` | CSS declaration assigning a style property value. |
| 37 | `  unreadCount: number;` | CSS declaration assigning a style property value. |
| 38 | `  nextCursor: string \| null;` | CSS declaration assigning a style property value. |
| 39 | `  messages: TrainerMessagingConversationMessage[];` | CSS declaration assigning a style property value. |
| 40 | `}` | Closes the current code/style block scope. |
| 41 | `` | Blank line used to separate logical blocks for readability. |
| 42 | `@Injectable({ providedIn: 'root' })` | Angular decorator declaring this class as an injectable service. |
| 43 | `export class MessagesService {` | Exports symbols so other files can import this logic. |
| 44 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 45 | `    private http: HttpClient,` | Core implementation line contributing to the file behavior. |
| 46 | `    private storage: StorageService` | Core implementation line contributing to the file behavior. |
| 47 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `  private authHeaders() {` | Begins a new code/style block scope. |
| 50 | `    return new HttpHeaders({ Authorization: \`Bearer ${this.storage.getToken()}\` });` | Returns a value from the current function/method. |
| 51 | `  }` | Closes the current code/style block scope. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `  private unwrapData<T>(response: any): T {` | Begins a new code/style block scope. |
| 54 | `    return (response?.data ?? response) as T;` | Returns a value from the current function/method. |
| 55 | `  }` | Closes the current code/style block scope. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `  listContacts() {` | Begins a new code/style block scope. |
| 58 | `    return this.http` | Returns a value from the current function/method. |
| 59 | `      .get<any>(\`${BASE_URL}/trainer-messaging/contacts\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 60 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingContact[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 61 | `  }` | Closes the current code/style block scope. |
| 62 | `` | Blank line used to separate logical blocks for readability. |
| 63 | `  listConversations() {` | Begins a new code/style block scope. |
| 64 | `    return this.http` | Returns a value from the current function/method. |
| 65 | `      .get<any>(\`${BASE_URL}/trainer-messaging/conversations\`, { headers: this.authHeaders() })` | Core implementation line contributing to the file behavior. |
| 66 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary[]>(res) ?? []));` | Starts an RxJS operator pipeline to transform Observable values. |
| 67 | `  }` | Closes the current code/style block scope. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `  createOrGetConversation(partnerId: string) {` | Begins a new code/style block scope. |
| 70 | `    return this.http` | Returns a value from the current function/method. |
| 71 | `      .post<any>(` | Core implementation line contributing to the file behavior. |
| 72 | `        \`${BASE_URL}/trainer-messaging/conversations\`,` | Core implementation line contributing to the file behavior. |
| 73 | `        { partnerId },` | Core implementation line contributing to the file behavior. |
| 74 | `        { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 75 | `      )` | Core implementation line contributing to the file behavior. |
| 76 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationSummary>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 77 | `  }` | Closes the current code/style block scope. |
| 78 | `` | Blank line used to separate logical blocks for readability. |
| 79 | `  getMessages(conversationId: string, limit = 50) {` | Begins a new code/style block scope. |
| 80 | `    return this.http` | Returns a value from the current function/method. |
| 81 | `      .get<any>(\`${BASE_URL}/trainer-messaging/conversations/${conversationId}/messages?limit=${limit}\`, {` | Begins a new code/style block scope. |
| 82 | `        headers: this.authHeaders(),` | Core implementation line contributing to the file behavior. |
| 83 | `      })` | Core implementation line contributing to the file behavior. |
| 84 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationMessagesPage>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 85 | `  }` | Closes the current code/style block scope. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `  sendMessage(conversationId: string, content: string) {` | Begins a new code/style block scope. |
| 88 | `    return this.http` | Returns a value from the current function/method. |
| 89 | `      .post<any>(` | Core implementation line contributing to the file behavior. |
| 90 | `        \`${BASE_URL}/trainer-messaging/conversations/${conversationId}/messages\`,` | Core implementation line contributing to the file behavior. |
| 91 | `        { content },` | Core implementation line contributing to the file behavior. |
| 92 | `        { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 93 | `      )` | Core implementation line contributing to the file behavior. |
| 94 | `      .pipe(map((res) => this.unwrapData<TrainerMessagingConversationMessagesPage>(res)));` | Starts an RxJS operator pipeline to transform Observable values. |
| 95 | `  }` | Closes the current code/style block scope. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `  markConversationRead(conversationId: string) {` | Begins a new code/style block scope. |
| 98 | `    return this.http.post<any>(` | Returns a value from the current function/method. |
| 99 | `      \`${BASE_URL}/trainer-messaging/conversations/${conversationId}/read\`,` | Core implementation line contributing to the file behavior. |
| 100 | `      {},` | Core implementation line contributing to the file behavior. |
| 101 | `      { headers: this.authHeaders() }` | Core implementation line contributing to the file behavior. |
| 102 | `    );` | Closes a function/method call statement. |
| 103 | `  }` | Closes the current code/style block scope. |
| 104 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.