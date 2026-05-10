import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-diet-plans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trainer-diet-plans.component.html',
  styleUrl: './trainer-diet-plans.component.css',
})
export class TrainerDietPlansComponent {
  loading = true;
  loadingDetail = false;
  submitting = false;
  assigning = false;
  deleting = false;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  dietPlans: any[] = [];
  bookedMembers: Array<{ id: string; name: string; email?: string }> = [];

  filters = {
    page: 1,
    limit: 10,
    status: 'ACTIVE',
    includeArchived: false,
  };

  pageInfo = {
    totalDocs: 0,
    totalPages: 1,
    currentPage: 1,
    hasNext: false,
    hasPrev: false,
    nextPage: null as number | null,
    previousPage: null as number | null,
  };

  showCreateModal = false;
  showDetailModal = false;
  selectedPlanSummary: any | null = null;
  selectedPlanDetail: any | null = null;

  createForm = {
    title: '',
    description: '',
    durationDays: 30,
    calorieTarget: 2400,
    meals: [this.newMeal(1)],
  };

  editForm = {
    title: '',
    description: '',
    durationDays: 30,
    calorieTarget: 2400,
    status: 'ACTIVE',
    meals: [this.newMeal(1)],
  };

  assignment = {
    effectiveFrom: '',
    effectiveTo: '',
    memberIds: [] as string[],
  };

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.loadBookedMembers();
    this.loadDietPlans();
  }

  private newMeal(sequence: number) {
    return {
      sequence,
      mealType: 'BREAKFAST',
      mealTitle: '',
      scheduledTime: '07:30:00',
      foodItemsText: '',
      calories: 500,
      proteinGrams: 30,
      carbsGrams: 50,
      fatGrams: 15,
      notes: '',
    };
  }

  private clearMessages(): void {
    this.successMessage = null;
    this.errorMessage = null;
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

  loadBookedMembers(): void {
    this.trainerService.getTrainerMyBookings().subscribe({
      next: (bookings) => (this.bookedMembers = this.extractBookedMembers(bookings ?? [])),
      error: () => (this.bookedMembers = []),
    });
  }

  loadDietPlans(): void {
    this.loading = true;
    this.clearMessages();
    this.trainerService.listDietPlans(this.filters).subscribe({
      next: (res) => {
        this.dietPlans = res.docs ?? [];
        this.pageInfo = {
          totalDocs: res.totalDocs ?? 0,
          totalPages: res.totalPages ?? 1,
          currentPage: res.currentPage ?? this.filters.page,
          hasNext: res.hasNext ?? false,
          hasPrev: res.hasPrev ?? false,
          nextPage: res.nextPage ?? null,
          previousPage: res.previousPage ?? null,
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Could not load diet plans.';
      },
    });
  }

  applyFilters(): void {
    this.filters.page = 1;
    this.loadDietPlans();
  }

  goToPrevious(): void {
    if (!this.pageInfo.hasPrev || !this.pageInfo.previousPage) return;
    this.filters.page = this.pageInfo.previousPage;
    this.loadDietPlans();
  }

  goToNext(): void {
    if (!this.pageInfo.hasNext || !this.pageInfo.nextPage) return;
    this.filters.page = this.pageInfo.nextPage;
    this.loadDietPlans();
  }

  openCreateModal(): void {
    this.createForm = {
      title: '',
      description: '',
      durationDays: 30,
      calorieTarget: 2400,
      meals: [this.newMeal(1)],
    };
    this.showCreateModal = true;
    this.clearMessages();
  }

  closeCreateModal(): void {
    if (this.submitting) return;
    this.showCreateModal = false;
  }

  addCreateMeal(): void {
    this.createForm.meals.push(this.newMeal(this.createForm.meals.length + 1));
  }

  removeCreateMeal(index: number): void {
    if (this.createForm.meals.length === 1) return;
    this.createForm.meals = this.createForm.meals.filter((_, i) => i !== index);
    this.createForm.meals = this.createForm.meals.map((meal, i) => ({ ...meal, sequence: i + 1 }));
  }

  createDietPlan(): void {
    if (this.submitting) return;
    if (!this.createForm.title.trim()) {
      this.errorMessage = 'Diet plan title is required.';
      return;
    }

    this.submitting = true;
    this.clearMessages();
    this.trainerService
      .createDietPlan({
        title: this.createForm.title,
        description: this.createForm.description,
        durationDays: Number(this.createForm.durationDays),
        calorieTarget: Number(this.createForm.calorieTarget),
        meals: this.createForm.meals.map((meal, i) => ({
          sequence: Number(meal.sequence || i + 1),
          mealType: meal.mealType,
          mealTitle: meal.mealTitle,
          scheduledTime: meal.scheduledTime,
          foodItemsText: meal.foodItemsText,
          calories: Number(meal.calories),
          proteinGrams: Number(meal.proteinGrams),
          carbsGrams: Number(meal.carbsGrams),
          fatGrams: Number(meal.fatGrams),
          notes: meal.notes || undefined,
        })),
      })
      .subscribe({
        next: () => {
          this.submitting = false;
          this.showCreateModal = false;
          this.successMessage = 'Diet plan created successfully.';
          this.loadDietPlans();
        },
        error: () => {
          this.submitting = false;
          this.errorMessage = 'Could not create diet plan.';
        },
      });
  }

  openDetail(plan: any): void {
    this.showDetailModal = true;
    this.selectedPlanSummary = plan;
    this.selectedPlanDetail = null;
    this.loadingDetail = true;
    this.assignment = { effectiveFrom: '', effectiveTo: '', memberIds: [] };
    this.clearMessages();

    this.trainerService.getDietPlanById(plan.id).subscribe({
      next: (detail) => {
        this.selectedPlanDetail = detail;
        const meals = (detail?.meals ?? []).map((m: any, i: number) => ({
          sequence: Number(m.sequence ?? i + 1),
          mealType: m.mealType ?? 'BREAKFAST',
          mealTitle: m.mealTitle ?? '',
          scheduledTime: m.scheduledTime ?? '07:30:00',
          foodItemsText: m.foodItemsText ?? '',
          calories: Number(m.calories ?? 0),
          proteinGrams: Number(m.proteinGrams ?? 0),
          carbsGrams: Number(m.carbsGrams ?? 0),
          fatGrams: Number(m.fatGrams ?? 0),
          notes: m.notes ?? '',
        }));
        this.editForm = {
          title: detail?.title ?? '',
          description: detail?.description ?? '',
          durationDays: Number(detail?.durationDays ?? 30),
          calorieTarget: Number(detail?.calorieTarget ?? 2400),
          status: detail?.status ?? 'ACTIVE',
          meals: meals.length ? meals : [this.newMeal(1)],
        };
        this.loadingDetail = false;
      },
      error: () => {
        this.loadingDetail = false;
        this.errorMessage = 'Could not load diet plan detail.';
      },
    });
  }

  closeDetailModal(): void {
    if (this.submitting || this.assigning || this.deleting) return;
    this.showDetailModal = false;
    this.selectedPlanSummary = null;
    this.selectedPlanDetail = null;
  }

  addEditMeal(): void {
    this.editForm.meals.push(this.newMeal(this.editForm.meals.length + 1));
  }

  removeEditMeal(index: number): void {
    if (this.editForm.meals.length === 1) return;
    this.editForm.meals = this.editForm.meals.filter((_, i) => i !== index);
    this.editForm.meals = this.editForm.meals.map((meal, i) => ({ ...meal, sequence: i + 1 }));
  }

  private isAssigned(plan: any): boolean {
    const count = Number(plan?.assignedCount ?? plan?.totalAssignments ?? 0);
    const assignmentLength = Array.isArray(plan?.assignments) ? plan.assignments.length : 0;
    return count > 0 || assignmentLength > 0 || Boolean(plan?.isAssigned);
  }

  canUpdateSelected(): boolean {
    const plan = this.selectedPlanDetail ?? this.selectedPlanSummary;
    return String(plan?.status ?? '').toUpperCase() === 'ACTIVE' && !this.isAssigned(plan);
  }

  canDeleteSelected(): boolean {
    const plan = this.selectedPlanDetail ?? this.selectedPlanSummary;
    const isDraft = String(plan?.status ?? '').toUpperCase() === 'DRAFT';
    const visibility = String(plan?.visibility ?? 'PRIVATE').toUpperCase();
    return isDraft && visibility === 'PRIVATE';
  }

  updateDietPlan(): void {
    const planId = this.selectedPlanSummary?.id ?? this.selectedPlanDetail?.id;
    if (!planId || !this.canUpdateSelected() || this.submitting) return;

    this.submitting = true;
    this.clearMessages();
    this.trainerService
      .updateDietPlan(planId, {
        title: this.editForm.title,
        description: this.editForm.description,
        durationDays: Number(this.editForm.durationDays),
        calorieTarget: Number(this.editForm.calorieTarget),
        meals: this.editForm.meals.map((meal, i) => ({
          sequence: Number(meal.sequence || i + 1),
          mealType: meal.mealType,
          mealTitle: meal.mealTitle,
          scheduledTime: meal.scheduledTime,
          foodItemsText: meal.foodItemsText,
          calories: Number(meal.calories),
          proteinGrams: Number(meal.proteinGrams),
          carbsGrams: Number(meal.carbsGrams),
          fatGrams: Number(meal.fatGrams),
          notes: meal.notes || undefined,
        })),
        status: this.editForm.status || 'ACTIVE',
      })
      .subscribe({
        next: () => {
          this.submitting = false;
          this.successMessage = 'Diet plan updated successfully.';
          this.loadDietPlans();
          if (this.selectedPlanSummary?.id) {
            this.openDetail(this.selectedPlanSummary);
          }
        },
        error: () => {
          this.submitting = false;
          this.errorMessage = 'Could not update diet plan.';
        },
      });
  }

  deleteDietPlan(): void {
    const planId = this.selectedPlanSummary?.id ?? this.selectedPlanDetail?.id;
    if (!planId || !this.canDeleteSelected() || this.deleting) return;
    if (!confirm('Delete this DRAFT private diet plan?')) return;

    this.deleting = true;
    this.clearMessages();
    this.trainerService.deleteDietPlan(planId).subscribe({
      next: () => {
        this.deleting = false;
        this.showDetailModal = false;
        this.selectedPlanSummary = null;
        this.selectedPlanDetail = null;
        this.successMessage = 'Diet plan deleted successfully.';
        this.loadDietPlans();
      },
      error: () => {
        this.deleting = false;
        this.errorMessage = 'Could not delete diet plan.';
      },
    });
  }

  toggleAssignmentMember(memberId: string, checked: boolean): void {
    if (checked) {
      if (!this.assignment.memberIds.includes(memberId)) {
        this.assignment.memberIds = [...this.assignment.memberIds, memberId];
      }
      return;
    }
    this.assignment.memberIds = this.assignment.memberIds.filter((id) => id !== memberId);
  }

  assignAndArchive(): void {
    const planId = this.selectedPlanSummary?.id ?? this.selectedPlanDetail?.id;
    if (!planId || this.assigning) return;
    if (String(this.selectedPlanDetail?.status ?? this.selectedPlanSummary?.status ?? '').toUpperCase() !== 'ACTIVE') {
      this.errorMessage = 'Only ACTIVE plans can be assigned.';
      return;
    }
    if (!this.assignment.memberIds.length) {
      this.errorMessage = 'Choose at least one booked member.';
      return;
    }
    if (!this.assignment.effectiveFrom || !this.assignment.effectiveTo) {
      this.errorMessage = 'Please provide effective from/to dates.';
      return;
    }

    this.assigning = true;
    this.clearMessages();
    this.trainerService
      .assignDietPlan(planId, {
        assignments: this.assignment.memberIds.map((memberId) => ({
          memberId,
          effectiveFrom: this.assignment.effectiveFrom,
          effectiveTo: this.assignment.effectiveTo,
        })),
      })
      .subscribe({
        next: () => {
          this.trainerService.archiveDietPlan(planId).subscribe({
            next: () => {
              this.assigning = false;
              this.successMessage = 'Diet plan assigned and archived successfully.';
              this.loadDietPlans();
              if (this.selectedPlanSummary?.id) {
                this.openDetail(this.selectedPlanSummary);
              }
            },
            error: () => {
              this.assigning = false;
              this.errorMessage = 'Assignments saved but could not archive this plan.';
              this.loadDietPlans();
            },
          });
        },
        error: () => {
          this.assigning = false;
          this.errorMessage = 'Could not assign diet plan.';
        },
      });
  }
}
