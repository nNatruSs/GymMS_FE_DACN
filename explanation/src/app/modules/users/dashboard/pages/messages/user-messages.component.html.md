# Explanation: `src/app/modules/users/dashboard/pages/messages/user-messages.component.html`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/messages/user-messages.component.html`
- **Total lines:** `91`
- **Non-empty lines:** `80`
- **Import statements:** `0`
- **Class-like declarations found:** `32`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="messages-page">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <h4 class="fw-semibold mb-3">Messages</h4>` | Declares a core TypeScript structure used by this module. |
| 3 | `` | Blank line used to separate logical blocks for readability. |
| 4 | `  <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `  <div class="row g-3">` | Declares a core TypeScript structure used by this module. |
| 7 | `    <div class="col-md-4">` | Declares a core TypeScript structure used by this module. |
| 8 | `      <div class="card border-0 shadow-sm p-2 h-100">` | Declares a core TypeScript structure used by this module. |
| 9 | `        <div class="card-body">` | Declares a core TypeScript structure used by this module. |
| 10 | `          <h6 class="fw-semibold mb-3">Conversations</h6>` | Declares a core TypeScript structure used by this module. |
| 11 | `` | Blank line used to separate logical blocks for readability. |
| 12 | `          <div *ngIf="conversations.length === 0" class="text-muted small mb-3">` | Declares a core TypeScript structure used by this module. |
| 13 | `            No conversations yet.` | Core implementation line contributing to the file behavior. |
| 14 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `          <button` | Core implementation line contributing to the file behavior. |
| 17 | `            *ngFor="let c of conversations; trackBy: trackByConversationId"` | Block comment content (documentation for nearby code). |
| 18 | `            class="btn btn-light w-100 text-start mb-2"` | Declares a core TypeScript structure used by this module. |
| 19 | `            [class.active-conversation]="selectedConversationId === c.conversationId"` | Declares a core TypeScript structure used by this module. |
| 20 | `            (click)="openConversation(c.conversationId)"` | Core implementation line contributing to the file behavior. |
| 21 | `          >` | Core implementation line contributing to the file behavior. |
| 22 | `            <div class="d-flex justify-content-between align-items-start">` | Declares a core TypeScript structure used by this module. |
| 23 | `              <div>` | HTML tag opening/closing markup for component template structure. |
| 24 | `                <div class="fw-medium">{{ c.partner.firstName }} {{ c.partner.lastName }}</div>` | Declares a core TypeScript structure used by this module. |
| 25 | `                <small class="text-muted">{{ c.lastMessagePreview \|\| 'No messages yet' }}</small>` | Declares a core TypeScript structure used by this module. |
| 26 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 27 | `              <span *ngIf="c.unreadCount > 0" class="badge bg-danger rounded-pill">{{ c.unreadCount }}</span>` | Declares a core TypeScript structure used by this module. |
| 28 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 29 | `          </button>` | HTML tag opening/closing markup for component template structure. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `          <hr />` | HTML tag opening/closing markup for component template structure. |
| 32 | `` | Blank line used to separate logical blocks for readability. |
| 33 | `          <h6 class="fw-semibold mb-2">Start new chat</h6>` | Declares a core TypeScript structure used by this module. |
| 34 | `          <div class="d-flex flex-column gap-2">` | Declares a core TypeScript structure used by this module. |
| 35 | `            <button` | Core implementation line contributing to the file behavior. |
| 36 | `              *ngFor="let contact of contacts"` | Block comment content (documentation for nearby code). |
| 37 | `              class="btn btn-outline-primary text-start"` | Declares a core TypeScript structure used by this module. |
| 38 | `              (click)="startConversation(contact.id)"` | Core implementation line contributing to the file behavior. |
| 39 | `            >` | Core implementation line contributing to the file behavior. |
| 40 | `              {{ contact.firstName }} {{ contact.lastName }}` | Core implementation line contributing to the file behavior. |
| 41 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 42 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 43 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 44 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 45 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `    <div class="col-md-8">` | Declares a core TypeScript structure used by this module. |
| 48 | `      <div class="card border-0 shadow-sm h-100">` | Declares a core TypeScript structure used by this module. |
| 49 | `        <div class="card-body d-flex flex-column">` | Declares a core TypeScript structure used by this module. |
| 50 | `          <h6 class="fw-semibold mb-3">{{ selectedPartnerName \|\| 'Select a conversation' }}</h6>` | Declares a core TypeScript structure used by this module. |
| 51 | `` | Blank line used to separate logical blocks for readability. |
| 52 | `          <div *ngIf="loading" class="text-muted">Loading messages...</div>` | Declares a core TypeScript structure used by this module. |
| 53 | `` | Blank line used to separate logical blocks for readability. |
| 54 | `          <div *ngIf="!loading" class="messages-thread flex-grow-1 mb-3">` | Declares a core TypeScript structure used by this module. |
| 55 | `            <div *ngIf="messages.length === 0" class="text-muted small">No messages yet.</div>` | Declares a core TypeScript structure used by this module. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `            <div` | Core implementation line contributing to the file behavior. |
| 58 | `              *ngFor="let msg of messages"` | Block comment content (documentation for nearby code). |
| 59 | `              class="d-flex mb-2"` | Declares a core TypeScript structure used by this module. |
| 60 | `              [class.justify-content-end]="msg.isOwn"` | Declares a core TypeScript structure used by this module. |
| 61 | `            >` | Core implementation line contributing to the file behavior. |
| 62 | `              <div [class.own-message]="msg.isOwn" class="message-bubble">` | Declares a core TypeScript structure used by this module. |
| 63 | `                <div>{{ msg.content }}</div>` | HTML tag opening/closing markup for component template structure. |
| 64 | `                <small class="text-muted">{{ msg.createdAt \| date: 'short' }}</small>` | Declares a core TypeScript structure used by this module. |
| 65 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 66 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 68 | `` | Blank line used to separate logical blocks for readability. |
| 69 | `          <div class="input-group">` | Declares a core TypeScript structure used by this module. |
| 70 | `            <input` | Core implementation line contributing to the file behavior. |
| 71 | `              type="text"` | Declares a core TypeScript structure used by this module. |
| 72 | `              class="form-control"` | Declares a core TypeScript structure used by this module. |
| 73 | `              [(ngModel)]="draftMessage"` | Core implementation line contributing to the file behavior. |
| 74 | `              [disabled]="!selectedConversationId \|\| sending"` | Core implementation line contributing to the file behavior. |
| 75 | `              placeholder="Type your message..."` | Core implementation line contributing to the file behavior. |
| 76 | `              (keyup.enter)="send()"` | Core implementation line contributing to the file behavior. |
| 77 | `            />` | Core implementation line contributing to the file behavior. |
| 78 | `            <button` | Core implementation line contributing to the file behavior. |
| 79 | `              class="btn btn-primary"` | Declares a core TypeScript structure used by this module. |
| 80 | `              type="button"` | Declares a core TypeScript structure used by this module. |
| 81 | `              [disabled]="!selectedConversationId \|\| sending \|\| !draftMessage.trim()"` | Core implementation line contributing to the file behavior. |
| 82 | `              (click)="send()"` | Core implementation line contributing to the file behavior. |
| 83 | `            >` | Core implementation line contributing to the file behavior. |
| 84 | `              {{ sending ? 'Sending...' : 'Send' }}` | Core implementation line contributing to the file behavior. |
| 85 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 86 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 87 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 88 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 91 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.