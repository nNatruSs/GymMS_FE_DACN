import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-workout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-workout.component.html',
  styleUrl: './trainer-workout.component.css',
})
export class TrainerWorkoutComponent {
  loading = true;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  creatingExercise = false;
  updatingExercise = false;
  deletingExercise = false;
  creatingPlan = false;
  loadingPlanDetail = false;
  deletingPlan = false;

  exercises: any[] = [];
  workoutPlans: any[] = [];
  bookedMembers: Array<{ id: string; name: string; email?: string }> = [];

  showCreateExerciseModal = false;
  showExerciseDetailModal = false;
  showCreatePlanModal = false;
  showPlanDetailModal = false;

  selectedExercise: any | null = null;
  selectedPlanSummary: any | null = null;
  selectedPlanDetail: any | null = null;

  exerciseForm = {
    name: '',
    description: '',
    category: '',
    equipmentRequired: '',
  };

  planForm = {
    title: '',
    duration: 60,
    status: 'DRAFT',
    visibility: 'PRIVATE',
    assignedMemberIds: [] as string[],
    planItems: [
      {
        exerciseId: '',
        sequence: 1,
        targetSet: 3,
        targetRep: 10,
        targetWeight: 0,
        dayOfWeek: 'MON',
        notes: '',
      },
    ],
  };

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.errorMessage = null;
    this.successMessage = null;

    forkJoin({
      exercises: this.trainerService.listExercises(),
      plans: this.trainerService.listWorkoutPlans(),
      bookings: this.trainerService.getTrainerMyBookings(),
    }).subscribe({
      next: ({ exercises, plans, bookings }) => {
        this.exercises = exercises ?? [];
        this.workoutPlans = plans ?? [];
        this.bookedMembers = this.extractBookedMembers(bookings ?? []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Could not load workout page data.';
      },
    });
  }

  private extractBookedMembers(bookings: any[]): Array<{ id: string; name: string; email?: string }> {
    const blockedStatuses = new Set(['cancelled', 'rejected']);
    const map = new Map<string, { id: string; name: string; email?: string }>();
    for (const b of bookings ?? []) {
      const status = String(b?.status ?? '').toLowerCase();
      if (blockedStatuses.has(status)) continue;
      const member = b?.member ?? b?.user ?? null;
      if (!member?.id) continue;
      map.set(member.id, {
        id: member.id,
        name: `${member.firstName ?? ''} ${member.lastName ?? ''}`.trim() || member.email || 'Member',
        email: member.email,
      });
    }
    return Array.from(map.values());
  }

  // ─── Exercise CRUD ─────────────────────────────────────────────────────────
  openCreateExerciseModal(): void {
    this.exerciseForm = {
      name: '',
      description: '',
      category: '',
      equipmentRequired: '',
    };
    this.showCreateExerciseModal = true;
  }

  openExerciseDetail(ex: any): void {
    this.selectedExercise = ex;
    this.exerciseForm = {
      name: ex.name ?? '',
      description: ex.description ?? '',
      category: ex.category ?? '',
      equipmentRequired: ex.equipmentRequired ?? '',
    };
    this.showExerciseDetailModal = true;
  }

  closeExerciseModals(): void {
    if (this.creatingExercise || this.updatingExercise || this.deletingExercise) return;
    this.showCreateExerciseModal = false;
    this.showExerciseDetailModal = false;
    this.selectedExercise = null;
  }

  createExercise(): void {
    if (!this.exerciseForm.name.trim() || this.creatingExercise) return;
    this.creatingExercise = true;
    this.trainerService.createExercise({ ...this.exerciseForm }).subscribe({
      next: () => {
        this.creatingExercise = false;
        this.showCreateExerciseModal = false;
        this.successMessage = 'Exercise created successfully.';
        this.loadData();
      },
      error: () => {
        this.creatingExercise = false;
        this.errorMessage = 'Could not create exercise.';
      },
    });
  }

  updateExercise(): void {
    if (!this.selectedExercise?.id || !this.exerciseForm.name.trim() || this.updatingExercise) return;
    this.updatingExercise = true;
    this.trainerService.updateExercise(this.selectedExercise.id, { ...this.exerciseForm }).subscribe({
      next: () => {
        this.updatingExercise = false;
        this.showExerciseDetailModal = false;
        this.selectedExercise = null;
        this.successMessage = 'Exercise updated successfully.';
        this.loadData();
      },
      error: () => {
        this.updatingExercise = false;
        this.errorMessage = 'Could not update exercise.';
      },
    });
  }

  deleteExercise(): void {
    if (!this.selectedExercise?.id || this.deletingExercise) return;
    if (!confirm('Delete this exercise?')) return;
    this.deletingExercise = true;
    this.trainerService.deleteExercise(this.selectedExercise.id).subscribe({
      next: () => {
        this.deletingExercise = false;
        this.showExerciseDetailModal = false;
        this.selectedExercise = null;
        this.successMessage = 'Exercise deleted successfully.';
        this.loadData();
      },
      error: () => {
        this.deletingExercise = false;
        this.errorMessage = 'Could not delete exercise.';
      },
    });
  }

  // ─── Workout Plans ─────────────────────────────────────────────────────────
  openCreatePlanModal(): void {
    this.planForm = {
      title: '',
      duration: 60,
      status: 'DRAFT',
      visibility: 'PRIVATE',
      assignedMemberIds: [],
      planItems: [
        {
          exerciseId: '',
          sequence: 1,
          targetSet: 3,
          targetRep: 10,
          targetWeight: 0,
          dayOfWeek: 'MON',
          notes: '',
        },
      ],
    };
    this.showCreatePlanModal = true;
  }

  closePlanModals(): void {
    if (this.creatingPlan || this.loadingPlanDetail || this.deletingPlan) return;
    this.showCreatePlanModal = false;
    this.showPlanDetailModal = false;
    this.selectedPlanSummary = null;
    this.selectedPlanDetail = null;
  }

  toggleAssignedMember(memberId: string, checked: boolean): void {
    if (checked) {
      if (!this.planForm.assignedMemberIds.includes(memberId)) {
        this.planForm.assignedMemberIds = [...this.planForm.assignedMemberIds, memberId];
      }
      return;
    }
    this.planForm.assignedMemberIds = this.planForm.assignedMemberIds.filter((id) => id !== memberId);
  }

  addPlanItem(): void {
    this.planForm.planItems.push({
      exerciseId: '',
      sequence: this.planForm.planItems.length + 1,
      targetSet: 3,
      targetRep: 10,
      targetWeight: 0,
      dayOfWeek: 'MON',
      notes: '',
    });
  }

  removePlanItem(index: number): void {
    this.planForm.planItems = this.planForm.planItems.filter((_, i) => i !== index);
    this.planForm.planItems = this.planForm.planItems.map((it, i) => ({ ...it, sequence: i + 1 }));
  }

  createWorkoutPlan(): void {
    if (this.creatingPlan) return;
    if (!this.planForm.title.trim()) {
      this.errorMessage = 'Workout plan title is required.';
      return;
    }
    if (!this.planForm.assignedMemberIds.length) {
      this.errorMessage = 'Assign at least one booked member.';
      return;
    }
    const invalidItem = this.planForm.planItems.some((item) => !item.exerciseId);
    if (invalidItem) {
      this.errorMessage = 'Each plan item must select an exercise.';
      return;
    }

    this.creatingPlan = true;
    this.errorMessage = null;
    this.trainerService.createWorkoutPlan({
      title: this.planForm.title,
      duration: Number(this.planForm.duration),
      status: this.planForm.status,
      visibility: this.planForm.visibility,
      assignedMemberIds: this.planForm.assignedMemberIds,
      planItems: this.planForm.planItems.map((item, i) => ({
        exerciseId: item.exerciseId,
        sequence: Number(item.sequence ?? i + 1),
        targetSet: Number(item.targetSet),
        targetRep: Number(item.targetRep),
        targetWeight: Number(item.targetWeight),
        dayOfWeek: item.dayOfWeek,
        notes: item.notes || undefined,
      })),
    }).subscribe({
      next: () => {
        this.creatingPlan = false;
        this.showCreatePlanModal = false;
        this.successMessage = 'Workout plan created successfully.';
        this.loadData();
      },
      error: () => {
        this.creatingPlan = false;
        this.errorMessage = 'Could not create workout plan.';
      },
    });
  }

  openPlanDetail(plan: any): void {
    this.selectedPlanSummary = plan;
    this.showPlanDetailModal = true;
    this.loadingPlanDetail = true;
    this.selectedPlanDetail = null;
    this.trainerService.getWorkoutPlanById(plan.id).subscribe({
      next: (detail) => {
        this.selectedPlanDetail = {
          ...detail,
          planItems: detail?.planItems ?? detail?.items ?? [],
        };
        this.loadingPlanDetail = false;
      },
      error: () => {
        this.loadingPlanDetail = false;
        this.errorMessage = 'Could not load workout plan details.';
      },
    });
  }

  deleteWorkoutPlan(): void {
    const planId = this.selectedPlanSummary?.id || this.selectedPlanDetail?.id;
    if (!planId || this.deletingPlan) return;
    if (!confirm('Delete this workout plan?')) return;
    this.deletingPlan = true;
    this.trainerService.deleteWorkoutPlan(planId).subscribe({
      next: () => {
        this.deletingPlan = false;
        this.showPlanDetailModal = false;
        this.selectedPlanSummary = null;
        this.selectedPlanDetail = null;
        this.successMessage = 'Workout plan deleted successfully.';
        this.loadData();
      },
      error: () => {
        this.deletingPlan = false;
        this.errorMessage = 'Could not delete workout plan.';
      },
    });
  }
}
