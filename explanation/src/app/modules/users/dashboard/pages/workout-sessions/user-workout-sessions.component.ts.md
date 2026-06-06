# Explanation: `src/app/modules/users/dashboard/pages/workout-sessions/user-workout-sessions.component.ts`

## File Overview
- **Relative path:** `src/app/modules/users/dashboard/pages/workout-sessions/user-workout-sessions.component.ts`
- **Total lines:** `238`
- **Non-empty lines:** `215`
- **Import statements:** `4`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `2`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component, inject } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormsModule } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { WorkoutSessionService } from '../../../services/workout-session.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `` | Blank line used to separate logical blocks for readability. |
| 6 | `@Component({` | Angular decorator declaring metadata for this component. |
| 7 | `  selector: 'app-user-workout-sessions',` | Core implementation line contributing to the file behavior. |
| 8 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 9 | `  imports: [CommonModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 10 | `  templateUrl: './user-workout-sessions.component.html',` | Core implementation line contributing to the file behavior. |
| 11 | `  styleUrls: ['./user-workout-sessions.component.css'],` | Core implementation line contributing to the file behavior. |
| 12 | `})` | Core implementation line contributing to the file behavior. |
| 13 | `export class UserWorkoutSessionsComponent {` | Exports symbols so other files can import this logic. |
| 14 | `  private workoutSessionService = inject(WorkoutSessionService);` | Core implementation line contributing to the file behavior. |
| 15 | `` | Blank line used to separate logical blocks for readability. |
| 16 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 17 | `  starting = false;` | Core implementation line contributing to the file behavior. |
| 18 | `  completing = false;` | Core implementation line contributing to the file behavior. |
| 19 | `  loggingSet = false;` | Core implementation line contributing to the file behavior. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `  sessions: any[] = [];` | CSS declaration assigning a style property value. |
| 22 | `  errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 23 | `  successMessage = '';` | Core implementation line contributing to the file behavior. |
| 24 | `` | Blank line used to separate logical blocks for readability. |
| 25 | `  showStartModal = false;` | Core implementation line contributing to the file behavior. |
| 26 | `  showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 27 | `  selectedSession: any \| null = null;` | CSS declaration assigning a style property value. |
| 28 | `` | Blank line used to separate logical blocks for readability. |
| 29 | `  startForm = {` | Begins a new code/style block scope. |
| 30 | `    workoutPlanId: '',` | Core implementation line contributing to the file behavior. |
| 31 | `    startTime: '',` | Core implementation line contributing to the file behavior. |
| 32 | `    notes: '',` | Core implementation line contributing to the file behavior. |
| 33 | `  };` | Core implementation line contributing to the file behavior. |
| 34 | `` | Blank line used to separate logical blocks for readability. |
| 35 | `  completeForm = {` | Begins a new code/style block scope. |
| 36 | `    endTime: '',` | Core implementation line contributing to the file behavior. |
| 37 | `    notes: '',` | Core implementation line contributing to the file behavior. |
| 38 | `  };` | Core implementation line contributing to the file behavior. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `  setForm = {` | Begins a new code/style block scope. |
| 41 | `    exerciseId: '',` | Core implementation line contributing to the file behavior. |
| 42 | `    planItemId: '',` | Core implementation line contributing to the file behavior. |
| 43 | `    setNumber: 1,` | Core implementation line contributing to the file behavior. |
| 44 | `    actualRep: 8,` | Core implementation line contributing to the file behavior. |
| 45 | `    actualWeight: 0,` | Core implementation line contributing to the file behavior. |
| 46 | `    rpe: 7,` | Core implementation line contributing to the file behavior. |
| 47 | `  };` | Core implementation line contributing to the file behavior. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 50 | `    this.startForm.startTime = this.toDateTimeLocal(new Date());` | Core implementation line contributing to the file behavior. |
| 51 | `    this.completeForm.endTime = this.toDateTimeLocal(new Date());` | Core implementation line contributing to the file behavior. |
| 52 | `    this.loadSessions();` | Core implementation line contributing to the file behavior. |
| 53 | `  }` | Closes the current code/style block scope. |
| 54 | `` | Blank line used to separate logical blocks for readability. |
| 55 | `  loadSessions(): void {` | Begins a new code/style block scope. |
| 56 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 57 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 58 | `    this.workoutSessionService.listWorkoutSessions().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 59 | `      next: (rows) => {` | Arrow function definition, often used for callbacks. |
| 60 | `        this.sessions = rows ?? [];` | Core implementation line contributing to the file behavior. |
| 61 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 62 | `      },` | Core implementation line contributing to the file behavior. |
| 63 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 64 | `        this.sessions = [];` | Core implementation line contributing to the file behavior. |
| 65 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 66 | `        this.errorMessage = 'Could not load workout sessions.';` | Core implementation line contributing to the file behavior. |
| 67 | `      },` | Core implementation line contributing to the file behavior. |
| 68 | `    });` | Core implementation line contributing to the file behavior. |
| 69 | `  }` | Closes the current code/style block scope. |
| 70 | `` | Blank line used to separate logical blocks for readability. |
| 71 | `  private toDateTimeLocal(date: Date): string {` | Begins a new code/style block scope. |
| 72 | `    const y = date.getFullYear();` | Core implementation line contributing to the file behavior. |
| 73 | `    const m = String(date.getMonth() + 1).padStart(2, '0');` | Core implementation line contributing to the file behavior. |
| 74 | `    const d = String(date.getDate()).padStart(2, '0');` | Core implementation line contributing to the file behavior. |
| 75 | `    const hh = String(date.getHours()).padStart(2, '0');` | Core implementation line contributing to the file behavior. |
| 76 | `    const mm = String(date.getMinutes()).padStart(2, '0');` | Core implementation line contributing to the file behavior. |
| 77 | `    return \`${y}-${m}-${d}T${hh}:${mm}\`;` | Returns a value from the current function/method. |
| 78 | `  }` | Closes the current code/style block scope. |
| 79 | `` | Blank line used to separate logical blocks for readability. |
| 80 | `  private toIso(value: string): string {` | Begins a new code/style block scope. |
| 81 | `    if (!value) return new Date().toISOString();` | Conditional branch: executes block only when condition is true. |
| 82 | `    const parsed = new Date(value);` | Core implementation line contributing to the file behavior. |
| 83 | `    if (Number.isNaN(parsed.getTime())) return new Date().toISOString();` | Conditional branch: executes block only when condition is true. |
| 84 | `    return parsed.toISOString();` | Returns a value from the current function/method. |
| 85 | `  }` | Closes the current code/style block scope. |
| 86 | `` | Blank line used to separate logical blocks for readability. |
| 87 | `  openStartModal(): void {` | Begins a new code/style block scope. |
| 88 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 89 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 90 | `    this.startForm = {` | Begins a new code/style block scope. |
| 91 | `      workoutPlanId: '',` | Core implementation line contributing to the file behavior. |
| 92 | `      startTime: this.toDateTimeLocal(new Date()),` | Core implementation line contributing to the file behavior. |
| 93 | `      notes: '',` | Core implementation line contributing to the file behavior. |
| 94 | `    };` | Core implementation line contributing to the file behavior. |
| 95 | `    this.showStartModal = true;` | Core implementation line contributing to the file behavior. |
| 96 | `  }` | Closes the current code/style block scope. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `  closeStartModal(): void {` | Begins a new code/style block scope. |
| 99 | `    if (this.starting) return;` | Conditional branch: executes block only when condition is true. |
| 100 | `    this.showStartModal = false;` | Core implementation line contributing to the file behavior. |
| 101 | `  }` | Closes the current code/style block scope. |
| 102 | `` | Blank line used to separate logical blocks for readability. |
| 103 | `  startSession(): void {` | Begins a new code/style block scope. |
| 104 | `    if (this.starting) return;` | Conditional branch: executes block only when condition is true. |
| 105 | `    if (!this.startForm.workoutPlanId.trim()) {` | Conditional branch: executes block only when condition is true. |
| 106 | `      this.errorMessage = 'Workout plan id is required.';` | Core implementation line contributing to the file behavior. |
| 107 | `      return;` | Core implementation line contributing to the file behavior. |
| 108 | `    }` | Closes the current code/style block scope. |
| 109 | `` | Blank line used to separate logical blocks for readability. |
| 110 | `    this.starting = true;` | Core implementation line contributing to the file behavior. |
| 111 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 112 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 113 | `    this.workoutSessionService` | Core implementation line contributing to the file behavior. |
| 114 | `      .startWorkoutSession({` | Begins a new code/style block scope. |
| 115 | `        workoutPlanId: this.startForm.workoutPlanId.trim(),` | Core implementation line contributing to the file behavior. |
| 116 | `        startTime: this.toIso(this.startForm.startTime),` | Core implementation line contributing to the file behavior. |
| 117 | `        notes: this.startForm.notes.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 118 | `      })` | Core implementation line contributing to the file behavior. |
| 119 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 120 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 121 | `          this.starting = false;` | Core implementation line contributing to the file behavior. |
| 122 | `          this.showStartModal = false;` | Core implementation line contributing to the file behavior. |
| 123 | `          this.successMessage = 'Workout session started successfully.';` | Core implementation line contributing to the file behavior. |
| 124 | `          this.loadSessions();` | Core implementation line contributing to the file behavior. |
| 125 | `        },` | Core implementation line contributing to the file behavior. |
| 126 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 127 | `          this.starting = false;` | Core implementation line contributing to the file behavior. |
| 128 | `          this.errorMessage = 'Could not start workout session.';` | Core implementation line contributing to the file behavior. |
| 129 | `        },` | Core implementation line contributing to the file behavior. |
| 130 | `      });` | Core implementation line contributing to the file behavior. |
| 131 | `  }` | Closes the current code/style block scope. |
| 132 | `` | Blank line used to separate logical blocks for readability. |
| 133 | `  openSessionDetail(session: any): void {` | Begins a new code/style block scope. |
| 134 | `    this.selectedSession = session;` | Core implementation line contributing to the file behavior. |
| 135 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 136 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 137 | `    this.completeForm = {` | Begins a new code/style block scope. |
| 138 | `      endTime: this.toDateTimeLocal(new Date()),` | Core implementation line contributing to the file behavior. |
| 139 | `      notes: '',` | Core implementation line contributing to the file behavior. |
| 140 | `    };` | Core implementation line contributing to the file behavior. |
| 141 | `    this.setForm = {` | Begins a new code/style block scope. |
| 142 | `      exerciseId: '',` | Core implementation line contributing to the file behavior. |
| 143 | `      planItemId: '',` | Core implementation line contributing to the file behavior. |
| 144 | `      setNumber: 1,` | Core implementation line contributing to the file behavior. |
| 145 | `      actualRep: 8,` | Core implementation line contributing to the file behavior. |
| 146 | `      actualWeight: 0,` | Core implementation line contributing to the file behavior. |
| 147 | `      rpe: 7,` | Core implementation line contributing to the file behavior. |
| 148 | `    };` | Core implementation line contributing to the file behavior. |
| 149 | `    this.showDetailModal = true;` | Core implementation line contributing to the file behavior. |
| 150 | `  }` | Closes the current code/style block scope. |
| 151 | `` | Blank line used to separate logical blocks for readability. |
| 152 | `  closeSessionDetail(): void {` | Begins a new code/style block scope. |
| 153 | `    if (this.completing \|\| this.loggingSet) return;` | Conditional branch: executes block only when condition is true. |
| 154 | `    this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 155 | `    this.selectedSession = null;` | Core implementation line contributing to the file behavior. |
| 156 | `  }` | Closes the current code/style block scope. |
| 157 | `` | Blank line used to separate logical blocks for readability. |
| 158 | `  completeSession(): void {` | Begins a new code/style block scope. |
| 159 | `    const sessionId = this.selectedSession?.id;` | Core implementation line contributing to the file behavior. |
| 160 | `    if (!sessionId \|\| this.completing) return;` | Conditional branch: executes block only when condition is true. |
| 161 | `` | Blank line used to separate logical blocks for readability. |
| 162 | `    this.completing = true;` | Core implementation line contributing to the file behavior. |
| 163 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 164 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 165 | `    this.workoutSessionService` | Core implementation line contributing to the file behavior. |
| 166 | `      .completeWorkoutSession(sessionId, {` | Begins a new code/style block scope. |
| 167 | `        endTime: this.toIso(this.completeForm.endTime),` | Core implementation line contributing to the file behavior. |
| 168 | `        notes: this.completeForm.notes.trim() \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 169 | `      })` | Core implementation line contributing to the file behavior. |
| 170 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 171 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 172 | `          this.completing = false;` | Core implementation line contributing to the file behavior. |
| 173 | `          this.successMessage = 'Workout session completed.';` | Core implementation line contributing to the file behavior. |
| 174 | `          this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 175 | `          this.selectedSession = null;` | Core implementation line contributing to the file behavior. |
| 176 | `          this.loadSessions();` | Core implementation line contributing to the file behavior. |
| 177 | `        },` | Core implementation line contributing to the file behavior. |
| 178 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 179 | `          this.completing = false;` | Core implementation line contributing to the file behavior. |
| 180 | `          this.errorMessage = 'Could not complete workout session.';` | Core implementation line contributing to the file behavior. |
| 181 | `        },` | Core implementation line contributing to the file behavior. |
| 182 | `      });` | Core implementation line contributing to the file behavior. |
| 183 | `  }` | Closes the current code/style block scope. |
| 184 | `` | Blank line used to separate logical blocks for readability. |
| 185 | `  logSet(): void {` | Begins a new code/style block scope. |
| 186 | `    const sessionId = this.selectedSession?.id;` | Core implementation line contributing to the file behavior. |
| 187 | `    if (!sessionId \|\| this.loggingSet) return;` | Conditional branch: executes block only when condition is true. |
| 188 | `    if (!this.setForm.exerciseId.trim() \|\| !this.setForm.planItemId.trim()) {` | Conditional branch: executes block only when condition is true. |
| 189 | `      this.errorMessage = 'Exercise id and plan item id are required to log a set.';` | Core implementation line contributing to the file behavior. |
| 190 | `      return;` | Core implementation line contributing to the file behavior. |
| 191 | `    }` | Closes the current code/style block scope. |
| 192 | `` | Blank line used to separate logical blocks for readability. |
| 193 | `    this.loggingSet = true;` | Core implementation line contributing to the file behavior. |
| 194 | `    this.errorMessage = '';` | Core implementation line contributing to the file behavior. |
| 195 | `    this.successMessage = '';` | Core implementation line contributing to the file behavior. |
| 196 | `    this.workoutSessionService` | Core implementation line contributing to the file behavior. |
| 197 | `      .logWorkoutSet(sessionId, {` | Begins a new code/style block scope. |
| 198 | `        exerciseId: this.setForm.exerciseId.trim(),` | Core implementation line contributing to the file behavior. |
| 199 | `        planItemId: this.setForm.planItemId.trim(),` | Core implementation line contributing to the file behavior. |
| 200 | `        setNumber: Number(this.setForm.setNumber),` | Core implementation line contributing to the file behavior. |
| 201 | `        actualRep: Number(this.setForm.actualRep),` | Core implementation line contributing to the file behavior. |
| 202 | `        actualWeight: Number(this.setForm.actualWeight),` | Core implementation line contributing to the file behavior. |
| 203 | `        rpe: Number(this.setForm.rpe),` | Core implementation line contributing to the file behavior. |
| 204 | `      })` | Core implementation line contributing to the file behavior. |
| 205 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 206 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 207 | `          this.loggingSet = false;` | Core implementation line contributing to the file behavior. |
| 208 | `          this.successMessage = 'Completed set logged successfully.';` | Core implementation line contributing to the file behavior. |
| 209 | `          this.setForm = {` | Begins a new code/style block scope. |
| 210 | `            ...this.setForm,` | Core implementation line contributing to the file behavior. |
| 211 | `            setNumber: this.setForm.setNumber + 1,` | Core implementation line contributing to the file behavior. |
| 212 | `          };` | Core implementation line contributing to the file behavior. |
| 213 | `        },` | Core implementation line contributing to the file behavior. |
| 214 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 215 | `          this.loggingSet = false;` | Core implementation line contributing to the file behavior. |
| 216 | `          this.errorMessage = 'Could not log completed set.';` | Core implementation line contributing to the file behavior. |
| 217 | `        },` | Core implementation line contributing to the file behavior. |
| 218 | `      });` | Core implementation line contributing to the file behavior. |
| 219 | `  }` | Closes the current code/style block scope. |
| 220 | `` | Blank line used to separate logical blocks for readability. |
| 221 | `  displayDateTime(value: string): string {` | Begins a new code/style block scope. |
| 222 | `    if (!value) return '-';` | Conditional branch: executes block only when condition is true. |
| 223 | `    const d = new Date(value);` | Core implementation line contributing to the file behavior. |
| 224 | `    if (Number.isNaN(d.getTime())) return value;` | Conditional branch: executes block only when condition is true. |
| 225 | `    return d.toLocaleString(undefined, {` | Returns a value from the current function/method. |
| 226 | `      year: 'numeric',` | Core implementation line contributing to the file behavior. |
| 227 | `      month: '2-digit',` | Core implementation line contributing to the file behavior. |
| 228 | `      day: '2-digit',` | Core implementation line contributing to the file behavior. |
| 229 | `      hour: '2-digit',` | Core implementation line contributing to the file behavior. |
| 230 | `      minute: '2-digit',` | Core implementation line contributing to the file behavior. |
| 231 | `      hour12: false,` | Core implementation line contributing to the file behavior. |
| 232 | `    });` | Core implementation line contributing to the file behavior. |
| 233 | `  }` | Closes the current code/style block scope. |
| 234 | `` | Blank line used to separate logical blocks for readability. |
| 235 | `  resolvePlanId(session: any): string {` | Begins a new code/style block scope. |
| 236 | `    return session?.workoutPlanId \|\| session?.workoutPlan?.id \|\| session?.planId \|\| '-';` | Returns a value from the current function/method. |
| 237 | `  }` | Closes the current code/style block scope. |
| 238 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.