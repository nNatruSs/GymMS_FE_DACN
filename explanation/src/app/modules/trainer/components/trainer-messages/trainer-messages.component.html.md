# Explanation: `src/app/modules/trainer/components/trainer-messages/trainer-messages.component.html`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-messages/trainer-messages.component.html`
- **Total lines:** `93`
- **Non-empty lines:** `82`
- **Import statements:** `0`
- **Class-like declarations found:** `33`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `<div class="card border-0 shadow-sm">` | Declares a core TypeScript structure used by this module. |
| 2 | `  <div class="card-body p-4 messages-page">` | Declares a core TypeScript structure used by this module. |
| 3 | `    <h4 class="fw-semibold mb-3">Messaging</h4>` | Declares a core TypeScript structure used by this module. |
| 4 | `` | Blank line used to separate logical blocks for readability. |
| 5 | `    <div *ngIf="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>` | Declares a core TypeScript structure used by this module. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `    <div class="row g-3">` | Declares a core TypeScript structure used by this module. |
| 8 | `      <div class="col-md-4">` | Declares a core TypeScript structure used by this module. |
| 9 | `        <div class="card border-0 shadow-sm p-2 h-100">` | Declares a core TypeScript structure used by this module. |
| 10 | `          <div class="card-body">` | Declares a core TypeScript structure used by this module. |
| 11 | `            <h6 class="fw-semibold mb-3">Conversations</h6>` | Declares a core TypeScript structure used by this module. |
| 12 | `` | Blank line used to separate logical blocks for readability. |
| 13 | `            <div *ngIf="conversations.length === 0" class="text-muted small mb-3">` | Declares a core TypeScript structure used by this module. |
| 14 | `              No conversations yet.` | Core implementation line contributing to the file behavior. |
| 15 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 16 | `` | Blank line used to separate logical blocks for readability. |
| 17 | `            <button` | Core implementation line contributing to the file behavior. |
| 18 | `              *ngFor="let c of conversations; trackBy: trackByConversationId"` | Block comment content (documentation for nearby code). |
| 19 | `              class="btn btn-light w-100 text-start mb-2"` | Declares a core TypeScript structure used by this module. |
| 20 | `              [class.active-conversation]="selectedConversationId === c.conversationId"` | Declares a core TypeScript structure used by this module. |
| 21 | `              (click)="openConversation(c.conversationId)"` | Core implementation line contributing to the file behavior. |
| 22 | `            >` | Core implementation line contributing to the file behavior. |
| 23 | `              <div class="d-flex justify-content-between align-items-start">` | Declares a core TypeScript structure used by this module. |
| 24 | `                <div>` | HTML tag opening/closing markup for component template structure. |
| 25 | `                  <div class="fw-medium">{{ c.partner.firstName }} {{ c.partner.lastName }}</div>` | Declares a core TypeScript structure used by this module. |
| 26 | `                  <small class="text-muted">{{ c.lastMessagePreview \|\| 'No messages yet' }}</small>` | Declares a core TypeScript structure used by this module. |
| 27 | `                </div>` | HTML tag opening/closing markup for component template structure. |
| 28 | `                <span *ngIf="c.unreadCount > 0" class="badge bg-danger rounded-pill">{{ c.unreadCount }}</span>` | Declares a core TypeScript structure used by this module. |
| 29 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 30 | `            </button>` | HTML tag opening/closing markup for component template structure. |
| 31 | `` | Blank line used to separate logical blocks for readability. |
| 32 | `            <hr />` | HTML tag opening/closing markup for component template structure. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `            <h6 class="fw-semibold mb-2">Start new chat</h6>` | Declares a core TypeScript structure used by this module. |
| 35 | `            <div class="d-flex flex-column gap-2">` | Declares a core TypeScript structure used by this module. |
| 36 | `              <button` | Core implementation line contributing to the file behavior. |
| 37 | `                *ngFor="let contact of contacts"` | Block comment content (documentation for nearby code). |
| 38 | `                class="btn btn-outline-primary text-start"` | Declares a core TypeScript structure used by this module. |
| 39 | `                (click)="startConversation(contact.id)"` | Core implementation line contributing to the file behavior. |
| 40 | `              >` | Core implementation line contributing to the file behavior. |
| 41 | `                {{ contact.firstName }} {{ contact.lastName }}` | Core implementation line contributing to the file behavior. |
| 42 | `              </button>` | HTML tag opening/closing markup for component template structure. |
| 43 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 44 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 45 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 46 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 47 | `` | Blank line used to separate logical blocks for readability. |
| 48 | `      <div class="col-md-8">` | Declares a core TypeScript structure used by this module. |
| 49 | `        <div class="card border-0 shadow-sm h-100">` | Declares a core TypeScript structure used by this module. |
| 50 | `          <div class="card-body d-flex flex-column">` | Declares a core TypeScript structure used by this module. |
| 51 | `            <h6 class="fw-semibold mb-3">{{ selectedPartnerName \|\| 'Select a conversation' }}</h6>` | Declares a core TypeScript structure used by this module. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `            <div *ngIf="loading" class="text-muted">Loading messages...</div>` | Declares a core TypeScript structure used by this module. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `            <div *ngIf="!loading" class="messages-thread flex-grow-1 mb-3">` | Declares a core TypeScript structure used by this module. |
| 56 | `              <div *ngIf="messages.length === 0" class="text-muted small">No messages yet.</div>` | Declares a core TypeScript structure used by this module. |
| 57 | `` | Blank line used to separate logical blocks for readability. |
| 58 | `              <div` | Core implementation line contributing to the file behavior. |
| 59 | `                *ngFor="let msg of messages"` | Block comment content (documentation for nearby code). |
| 60 | `                class="d-flex mb-2"` | Declares a core TypeScript structure used by this module. |
| 61 | `                [class.justify-content-end]="msg.isOwn"` | Declares a core TypeScript structure used by this module. |
| 62 | `              >` | Core implementation line contributing to the file behavior. |
| 63 | `                <div [class.own-message]="msg.isOwn" class="message-bubble">` | Declares a core TypeScript structure used by this module. |
| 64 | `                  <div>{{ msg.content }}</div>` | HTML tag opening/closing markup for component template structure. |
| 65 | `                  <small class="text-muted">{{ msg.createdAt \| date: 'short' }}</small>` | Declares a core TypeScript structure used by this module. |
| 66 | `                </div>` | HTML tag opening/closing markup for component template structure. |
| 67 | `              </div>` | HTML tag opening/closing markup for component template structure. |
| 68 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 69 | `` | Blank line used to separate logical blocks for readability. |
| 70 | `            <div class="input-group">` | Declares a core TypeScript structure used by this module. |
| 71 | `              <input` | Core implementation line contributing to the file behavior. |
| 72 | `                type="text"` | Declares a core TypeScript structure used by this module. |
| 73 | `                class="form-control"` | Declares a core TypeScript structure used by this module. |
| 74 | `                [(ngModel)]="draftMessage"` | Core implementation line contributing to the file behavior. |
| 75 | `                [disabled]="!selectedConversationId \|\| sending"` | Core implementation line contributing to the file behavior. |
| 76 | `                placeholder="Type your message..."` | Core implementation line contributing to the file behavior. |
| 77 | `                (keyup.enter)="send()"` | Core implementation line contributing to the file behavior. |
| 78 | `              />` | Core implementation line contributing to the file behavior. |
| 79 | `              <button` | Core implementation line contributing to the file behavior. |
| 80 | `                class="btn btn-primary"` | Declares a core TypeScript structure used by this module. |
| 81 | `                type="button"` | Declares a core TypeScript structure used by this module. |
| 82 | `                [disabled]="!selectedConversationId \|\| sending \|\| !draftMessage.trim()"` | Core implementation line contributing to the file behavior. |
| 83 | `                (click)="send()"` | Core implementation line contributing to the file behavior. |
| 84 | `              >` | Core implementation line contributing to the file behavior. |
| 85 | `                {{ sending ? 'Sending...' : 'Send' }}` | Core implementation line contributing to the file behavior. |
| 86 | `              </button>` | HTML tag opening/closing markup for component template structure. |
| 87 | `            </div>` | HTML tag opening/closing markup for component template structure. |
| 88 | `          </div>` | HTML tag opening/closing markup for component template structure. |
| 89 | `        </div>` | HTML tag opening/closing markup for component template structure. |
| 90 | `      </div>` | HTML tag opening/closing markup for component template structure. |
| 91 | `    </div>` | HTML tag opening/closing markup for component template structure. |
| 92 | `  </div>` | HTML tag opening/closing markup for component template structure. |
| 93 | `</div>` | HTML tag opening/closing markup for component template structure. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.