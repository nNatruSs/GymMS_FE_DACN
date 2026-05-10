import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutSessionService } from '../../../services/workout-session.service';

@Component({
  selector: 'app-user-workout-sessions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-workout-sessions.component.html',
  styleUrls: ['./user-workout-sessions.component.css'],
})
export class UserWorkoutSessionsComponent {
  private workoutSessionService = inject(WorkoutSessionService);

  loading = true;
  starting = false;
  completing = false;
  loggingSet = false;

  sessions: any[] = [];
  errorMessage = '';
  successMessage = '';

  showStartModal = false;
  showDetailModal = false;
  selectedSession: any | null = null;

  startForm = {
    workoutPlanId: '',
    startTime: '',
    notes: '',
  };

  completeForm = {
    endTime: '',
    notes: '',
  };

  setForm = {
    exerciseId: '',
    planItemId: '',
    setNumber: 1,
    actualRep: 8,
    actualWeight: 0,
    rpe: 7,
  };

  ngOnInit(): void {
    this.startForm.startTime = this.toDateTimeLocal(new Date());
    this.completeForm.endTime = this.toDateTimeLocal(new Date());
    this.loadSessions();
  }

  loadSessions(): void {
    this.loading = true;
    this.errorMessage = '';
    this.workoutSessionService.listWorkoutSessions().subscribe({
      next: (rows) => {
        this.sessions = rows ?? [];
        this.loading = false;
      },
      error: () => {
        this.sessions = [];
        this.loading = false;
        this.errorMessage = 'Could not load workout sessions.';
      },
    });
  }

  private toDateTimeLocal(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d}T${hh}:${mm}`;
  }

  private toIso(value: string): string {
    if (!value) return new Date().toISOString();
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return new Date().toISOString();
    return parsed.toISOString();
  }

  openStartModal(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.startForm = {
      workoutPlanId: '',
      startTime: this.toDateTimeLocal(new Date()),
      notes: '',
    };
    this.showStartModal = true;
  }

  closeStartModal(): void {
    if (this.starting) return;
    this.showStartModal = false;
  }

  startSession(): void {
    if (this.starting) return;
    if (!this.startForm.workoutPlanId.trim()) {
      this.errorMessage = 'Workout plan id is required.';
      return;
    }

    this.starting = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.workoutSessionService
      .startWorkoutSession({
        workoutPlanId: this.startForm.workoutPlanId.trim(),
        startTime: this.toIso(this.startForm.startTime),
        notes: this.startForm.notes.trim() || undefined,
      })
      .subscribe({
        next: () => {
          this.starting = false;
          this.showStartModal = false;
          this.successMessage = 'Workout session started successfully.';
          this.loadSessions();
        },
        error: () => {
          this.starting = false;
          this.errorMessage = 'Could not start workout session.';
        },
      });
  }

  openSessionDetail(session: any): void {
    this.selectedSession = session;
    this.errorMessage = '';
    this.successMessage = '';
    this.completeForm = {
      endTime: this.toDateTimeLocal(new Date()),
      notes: '',
    };
    this.setForm = {
      exerciseId: '',
      planItemId: '',
      setNumber: 1,
      actualRep: 8,
      actualWeight: 0,
      rpe: 7,
    };
    this.showDetailModal = true;
  }

  closeSessionDetail(): void {
    if (this.completing || this.loggingSet) return;
    this.showDetailModal = false;
    this.selectedSession = null;
  }

  completeSession(): void {
    const sessionId = this.selectedSession?.id;
    if (!sessionId || this.completing) return;

    this.completing = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.workoutSessionService
      .completeWorkoutSession(sessionId, {
        endTime: this.toIso(this.completeForm.endTime),
        notes: this.completeForm.notes.trim() || undefined,
      })
      .subscribe({
        next: () => {
          this.completing = false;
          this.successMessage = 'Workout session completed.';
          this.showDetailModal = false;
          this.selectedSession = null;
          this.loadSessions();
        },
        error: () => {
          this.completing = false;
          this.errorMessage = 'Could not complete workout session.';
        },
      });
  }

  logSet(): void {
    const sessionId = this.selectedSession?.id;
    if (!sessionId || this.loggingSet) return;
    if (!this.setForm.exerciseId.trim() || !this.setForm.planItemId.trim()) {
      this.errorMessage = 'Exercise id and plan item id are required to log a set.';
      return;
    }

    this.loggingSet = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.workoutSessionService
      .logWorkoutSet(sessionId, {
        exerciseId: this.setForm.exerciseId.trim(),
        planItemId: this.setForm.planItemId.trim(),
        setNumber: Number(this.setForm.setNumber),
        actualRep: Number(this.setForm.actualRep),
        actualWeight: Number(this.setForm.actualWeight),
        rpe: Number(this.setForm.rpe),
      })
      .subscribe({
        next: () => {
          this.loggingSet = false;
          this.successMessage = 'Completed set logged successfully.';
          this.setForm = {
            ...this.setForm,
            setNumber: this.setForm.setNumber + 1,
          };
        },
        error: () => {
          this.loggingSet = false;
          this.errorMessage = 'Could not log completed set.';
        },
      });
  }

  displayDateTime(value: string): string {
    if (!value) return '-';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }

  resolvePlanId(session: any): string {
    return session?.workoutPlanId || session?.workoutPlan?.id || session?.planId || '-';
  }
}
