# Explanation: `src/app/modules/trainer/components/trainer-workout/trainer-workout.component.ts`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-workout/trainer-workout.component.ts`
- **Total lines:** `351`
- **Non-empty lines:** `322`
- **Import statements:** `6`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `2`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormsModule } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { forkJoin } from 'rxjs';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { TrainerService } from '../../services/trainer.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 7 | `` | Blank line used to separate logical blocks for readability. |
| 8 | `@Component({` | Angular decorator declaring metadata for this component. |
| 9 | `  selector: 'app-trainer-workout',` | Core implementation line contributing to the file behavior. |
| 10 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 11 | `  imports: [CommonModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 12 | `  templateUrl: './trainer-workout.component.html',` | Core implementation line contributing to the file behavior. |
| 13 | `  styleUrl: './trainer-workout.component.css',` | Core implementation line contributing to the file behavior. |
| 14 | `})` | Core implementation line contributing to the file behavior. |
| 15 | `export class TrainerWorkoutComponent {` | Exports symbols so other files can import this logic. |
| 16 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 17 | `  errorMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 18 | `  successMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 19 | `` | Blank line used to separate logical blocks for readability. |
| 20 | `  creatingExercise = false;` | Core implementation line contributing to the file behavior. |
| 21 | `  updatingExercise = false;` | Core implementation line contributing to the file behavior. |
| 22 | `  deletingExercise = false;` | Core implementation line contributing to the file behavior. |
| 23 | `  creatingPlan = false;` | Core implementation line contributing to the file behavior. |
| 24 | `  loadingPlanDetail = false;` | Core implementation line contributing to the file behavior. |
| 25 | `  deletingPlan = false;` | Core implementation line contributing to the file behavior. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `  exercises: any[] = [];` | CSS declaration assigning a style property value. |
| 28 | `  workoutPlans: any[] = [];` | CSS declaration assigning a style property value. |
| 29 | `  bookedMembers: Array<{ id: string; name: string; email?: string }> = [];` | CSS declaration assigning a style property value. |
| 30 | `` | Blank line used to separate logical blocks for readability. |
| 31 | `  showCreateExerciseModal = false;` | Core implementation line contributing to the file behavior. |
| 32 | `  showExerciseDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 33 | `  showCreatePlanModal = false;` | Core implementation line contributing to the file behavior. |
| 34 | `  showPlanDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 35 | `` | Blank line used to separate logical blocks for readability. |
| 36 | `  selectedExercise: any \| null = null;` | CSS declaration assigning a style property value. |
| 37 | `  selectedPlanSummary: any \| null = null;` | CSS declaration assigning a style property value. |
| 38 | `  selectedPlanDetail: any \| null = null;` | CSS declaration assigning a style property value. |
| 39 | `` | Blank line used to separate logical blocks for readability. |
| 40 | `  exerciseForm = {` | Begins a new code/style block scope. |
| 41 | `    name: '',` | Core implementation line contributing to the file behavior. |
| 42 | `    description: '',` | Core implementation line contributing to the file behavior. |
| 43 | `    category: '',` | Core implementation line contributing to the file behavior. |
| 44 | `    equipmentRequired: '',` | Core implementation line contributing to the file behavior. |
| 45 | `  };` | Core implementation line contributing to the file behavior. |
| 46 | `` | Blank line used to separate logical blocks for readability. |
| 47 | `  planForm = {` | Begins a new code/style block scope. |
| 48 | `    title: '',` | Core implementation line contributing to the file behavior. |
| 49 | `    duration: 60,` | Core implementation line contributing to the file behavior. |
| 50 | `    status: 'DRAFT',` | Core implementation line contributing to the file behavior. |
| 51 | `    visibility: 'PRIVATE',` | Core implementation line contributing to the file behavior. |
| 52 | `    assignedMemberIds: [] as string[],` | Core implementation line contributing to the file behavior. |
| 53 | `    planItems: [` | Core implementation line contributing to the file behavior. |
| 54 | `      {` | Begins a new code/style block scope. |
| 55 | `        exerciseId: '',` | Core implementation line contributing to the file behavior. |
| 56 | `        sequence: 1,` | Core implementation line contributing to the file behavior. |
| 57 | `        targetSet: 3,` | Core implementation line contributing to the file behavior. |
| 58 | `        targetRep: 10,` | Core implementation line contributing to the file behavior. |
| 59 | `        targetWeight: 0,` | Core implementation line contributing to the file behavior. |
| 60 | `        dayOfWeek: 'MON',` | Core implementation line contributing to the file behavior. |
| 61 | `        notes: '',` | Core implementation line contributing to the file behavior. |
| 62 | `      },` | Core implementation line contributing to the file behavior. |
| 63 | `    ],` | Core implementation line contributing to the file behavior. |
| 64 | `  };` | Core implementation line contributing to the file behavior. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 67 | `    private trainerService: TrainerService,` | Core implementation line contributing to the file behavior. |
| 68 | `    private confirmDialog: ConfirmDialogService` | Core implementation line contributing to the file behavior. |
| 69 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 70 | `` | Blank line used to separate logical blocks for readability. |
| 71 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 72 | `    this.loadData();` | Core implementation line contributing to the file behavior. |
| 73 | `  }` | Closes the current code/style block scope. |
| 74 | `` | Blank line used to separate logical blocks for readability. |
| 75 | `  loadData(): void {` | Begins a new code/style block scope. |
| 76 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 77 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 78 | `    this.successMessage = null;` | Core implementation line contributing to the file behavior. |
| 79 | `` | Blank line used to separate logical blocks for readability. |
| 80 | `    forkJoin({` | Begins a new code/style block scope. |
| 81 | `      exercises: this.trainerService.listExercises(),` | Core implementation line contributing to the file behavior. |
| 82 | `      plans: this.trainerService.listWorkoutPlans(),` | Core implementation line contributing to the file behavior. |
| 83 | `      bookings: this.trainerService.getTrainerMyBookings(),` | Core implementation line contributing to the file behavior. |
| 84 | `    }).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 85 | `      next: ({ exercises, plans, bookings }) => {` | Arrow function definition, often used for callbacks. |
| 86 | `        this.exercises = exercises ?? [];` | Core implementation line contributing to the file behavior. |
| 87 | `        this.workoutPlans = plans ?? [];` | Core implementation line contributing to the file behavior. |
| 88 | `        this.bookedMembers = this.extractBookedMembers(bookings ?? []);` | Core implementation line contributing to the file behavior. |
| 89 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 90 | `      },` | Core implementation line contributing to the file behavior. |
| 91 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 92 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 93 | `        this.errorMessage = 'Could not load workout page data.';` | Core implementation line contributing to the file behavior. |
| 94 | `      },` | Core implementation line contributing to the file behavior. |
| 95 | `    });` | Core implementation line contributing to the file behavior. |
| 96 | `  }` | Closes the current code/style block scope. |
| 97 | `` | Blank line used to separate logical blocks for readability. |
| 98 | `  private extractBookedMembers(bookings: any[]): Array<{ id: string; name: string; email?: string }> {` | Begins a new code/style block scope. |
| 99 | `    const blockedStatuses = new Set(['cancelled', 'rejected']);` | Core implementation line contributing to the file behavior. |
| 100 | `    const map = new Map<string, { id: string; name: string; email?: string }>();` | CSS declaration assigning a style property value. |
| 101 | `    for (const b of bookings ?? []) {` | Loop iterating across a collection or numeric range. |
| 102 | `      const status = String(b?.status ?? '').toLowerCase();` | Core implementation line contributing to the file behavior. |
| 103 | `      if (blockedStatuses.has(status)) continue;` | Conditional branch: executes block only when condition is true. |
| 104 | `      const member = b?.member ?? b?.user ?? null;` | Core implementation line contributing to the file behavior. |
| 105 | `      if (!member?.id) continue;` | Conditional branch: executes block only when condition is true. |
| 106 | `      map.set(member.id, {` | Begins a new code/style block scope. |
| 107 | `        id: member.id,` | Core implementation line contributing to the file behavior. |
| 108 | `        name: \`${member.firstName ?? ''} ${member.lastName ?? ''}\`.trim() \|\| member.email \|\| 'Member',` | Core implementation line contributing to the file behavior. |
| 109 | `        email: member.email,` | Core implementation line contributing to the file behavior. |
| 110 | `      });` | Core implementation line contributing to the file behavior. |
| 111 | `    }` | Closes the current code/style block scope. |
| 112 | `    return Array.from(map.values());` | Returns a value from the current function/method. |
| 113 | `  }` | Closes the current code/style block scope. |
| 114 | `` | Blank line used to separate logical blocks for readability. |
| 115 | `  ` | Blank line used to separate logical blocks for readability. |
| 116 | `  openCreateExerciseModal(): void {` | Begins a new code/style block scope. |
| 117 | `    this.exerciseForm = {` | Begins a new code/style block scope. |
| 118 | `      name: '',` | Core implementation line contributing to the file behavior. |
| 119 | `      description: '',` | Core implementation line contributing to the file behavior. |
| 120 | `      category: '',` | Core implementation line contributing to the file behavior. |
| 121 | `      equipmentRequired: '',` | Core implementation line contributing to the file behavior. |
| 122 | `    };` | Core implementation line contributing to the file behavior. |
| 123 | `    this.showCreateExerciseModal = true;` | Core implementation line contributing to the file behavior. |
| 124 | `  }` | Closes the current code/style block scope. |
| 125 | `` | Blank line used to separate logical blocks for readability. |
| 126 | `  openExerciseDetail(ex: any): void {` | Begins a new code/style block scope. |
| 127 | `    this.selectedExercise = ex;` | Core implementation line contributing to the file behavior. |
| 128 | `    this.exerciseForm = {` | Begins a new code/style block scope. |
| 129 | `      name: ex.name ?? '',` | Core implementation line contributing to the file behavior. |
| 130 | `      description: ex.description ?? '',` | Core implementation line contributing to the file behavior. |
| 131 | `      category: ex.category ?? '',` | Core implementation line contributing to the file behavior. |
| 132 | `      equipmentRequired: ex.equipmentRequired ?? '',` | Core implementation line contributing to the file behavior. |
| 133 | `    };` | Core implementation line contributing to the file behavior. |
| 134 | `    this.showExerciseDetailModal = true;` | Core implementation line contributing to the file behavior. |
| 135 | `  }` | Closes the current code/style block scope. |
| 136 | `` | Blank line used to separate logical blocks for readability. |
| 137 | `  closeExerciseModals(): void {` | Begins a new code/style block scope. |
| 138 | `    if (this.creatingExercise \|\| this.updatingExercise \|\| this.deletingExercise) return;` | Conditional branch: executes block only when condition is true. |
| 139 | `    this.showCreateExerciseModal = false;` | Core implementation line contributing to the file behavior. |
| 140 | `    this.showExerciseDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 141 | `    this.selectedExercise = null;` | Core implementation line contributing to the file behavior. |
| 142 | `  }` | Closes the current code/style block scope. |
| 143 | `` | Blank line used to separate logical blocks for readability. |
| 144 | `  createExercise(): void {` | Begins a new code/style block scope. |
| 145 | `    if (!this.exerciseForm.name.trim() \|\| this.creatingExercise) return;` | Conditional branch: executes block only when condition is true. |
| 146 | `    this.creatingExercise = true;` | Core implementation line contributing to the file behavior. |
| 147 | `    this.trainerService.createExercise({ ...this.exerciseForm }).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 148 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 149 | `        this.creatingExercise = false;` | Core implementation line contributing to the file behavior. |
| 150 | `        this.showCreateExerciseModal = false;` | Core implementation line contributing to the file behavior. |
| 151 | `        this.successMessage = 'Exercise created successfully.';` | Core implementation line contributing to the file behavior. |
| 152 | `        this.loadData();` | Core implementation line contributing to the file behavior. |
| 153 | `      },` | Core implementation line contributing to the file behavior. |
| 154 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 155 | `        this.creatingExercise = false;` | Core implementation line contributing to the file behavior. |
| 156 | `        this.errorMessage = 'Could not create exercise.';` | Core implementation line contributing to the file behavior. |
| 157 | `      },` | Core implementation line contributing to the file behavior. |
| 158 | `    });` | Core implementation line contributing to the file behavior. |
| 159 | `  }` | Closes the current code/style block scope. |
| 160 | `` | Blank line used to separate logical blocks for readability. |
| 161 | `  updateExercise(): void {` | Begins a new code/style block scope. |
| 162 | `    if (!this.selectedExercise?.id \|\| !this.exerciseForm.name.trim() \|\| this.updatingExercise) return;` | Conditional branch: executes block only when condition is true. |
| 163 | `    this.updatingExercise = true;` | Core implementation line contributing to the file behavior. |
| 164 | `    this.trainerService.updateExercise(this.selectedExercise.id, { ...this.exerciseForm }).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 165 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 166 | `        this.updatingExercise = false;` | Core implementation line contributing to the file behavior. |
| 167 | `        this.showExerciseDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 168 | `        this.selectedExercise = null;` | Core implementation line contributing to the file behavior. |
| 169 | `        this.successMessage = 'Exercise updated successfully.';` | Core implementation line contributing to the file behavior. |
| 170 | `        this.loadData();` | Core implementation line contributing to the file behavior. |
| 171 | `      },` | Core implementation line contributing to the file behavior. |
| 172 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 173 | `        this.updatingExercise = false;` | Core implementation line contributing to the file behavior. |
| 174 | `        this.errorMessage = 'Could not update exercise.';` | Core implementation line contributing to the file behavior. |
| 175 | `      },` | Core implementation line contributing to the file behavior. |
| 176 | `    });` | Core implementation line contributing to the file behavior. |
| 177 | `  }` | Closes the current code/style block scope. |
| 178 | `` | Blank line used to separate logical blocks for readability. |
| 179 | `  async deleteExercise(): Promise<void> {` | Begins a new code/style block scope. |
| 180 | `    if (!this.selectedExercise?.id \|\| this.deletingExercise) return;` | Conditional branch: executes block only when condition is true. |
| 181 | `    const confirmed = await this.confirmDialog.confirm('Delete this exercise?', {` | Begins a new code/style block scope. |
| 182 | `      title: 'Confirm Delete Exercise',` | Core implementation line contributing to the file behavior. |
| 183 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 184 | `    });` | Core implementation line contributing to the file behavior. |
| 185 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 186 | `    this.deletingExercise = true;` | Core implementation line contributing to the file behavior. |
| 187 | `    this.trainerService.deleteExercise(this.selectedExercise.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 188 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 189 | `        this.deletingExercise = false;` | Core implementation line contributing to the file behavior. |
| 190 | `        this.showExerciseDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 191 | `        this.selectedExercise = null;` | Core implementation line contributing to the file behavior. |
| 192 | `        this.successMessage = 'Exercise deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 193 | `        this.loadData();` | Core implementation line contributing to the file behavior. |
| 194 | `      },` | Core implementation line contributing to the file behavior. |
| 195 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 196 | `        this.deletingExercise = false;` | Core implementation line contributing to the file behavior. |
| 197 | `        this.errorMessage = 'Could not delete exercise.';` | Core implementation line contributing to the file behavior. |
| 198 | `      },` | Core implementation line contributing to the file behavior. |
| 199 | `    });` | Core implementation line contributing to the file behavior. |
| 200 | `  }` | Closes the current code/style block scope. |
| 201 | `` | Blank line used to separate logical blocks for readability. |
| 202 | `  ` | Blank line used to separate logical blocks for readability. |
| 203 | `  openCreatePlanModal(): void {` | Begins a new code/style block scope. |
| 204 | `    this.planForm = {` | Begins a new code/style block scope. |
| 205 | `      title: '',` | Core implementation line contributing to the file behavior. |
| 206 | `      duration: 60,` | Core implementation line contributing to the file behavior. |
| 207 | `      status: 'DRAFT',` | Core implementation line contributing to the file behavior. |
| 208 | `      visibility: 'PRIVATE',` | Core implementation line contributing to the file behavior. |
| 209 | `      assignedMemberIds: [],` | Core implementation line contributing to the file behavior. |
| 210 | `      planItems: [` | Core implementation line contributing to the file behavior. |
| 211 | `        {` | Begins a new code/style block scope. |
| 212 | `          exerciseId: '',` | Core implementation line contributing to the file behavior. |
| 213 | `          sequence: 1,` | Core implementation line contributing to the file behavior. |
| 214 | `          targetSet: 3,` | Core implementation line contributing to the file behavior. |
| 215 | `          targetRep: 10,` | Core implementation line contributing to the file behavior. |
| 216 | `          targetWeight: 0,` | Core implementation line contributing to the file behavior. |
| 217 | `          dayOfWeek: 'MON',` | Core implementation line contributing to the file behavior. |
| 218 | `          notes: '',` | Core implementation line contributing to the file behavior. |
| 219 | `        },` | Core implementation line contributing to the file behavior. |
| 220 | `      ],` | Core implementation line contributing to the file behavior. |
| 221 | `    };` | Core implementation line contributing to the file behavior. |
| 222 | `    this.showCreatePlanModal = true;` | Core implementation line contributing to the file behavior. |
| 223 | `  }` | Closes the current code/style block scope. |
| 224 | `` | Blank line used to separate logical blocks for readability. |
| 225 | `  closePlanModals(): void {` | Begins a new code/style block scope. |
| 226 | `    if (this.creatingPlan \|\| this.loadingPlanDetail \|\| this.deletingPlan) return;` | Conditional branch: executes block only when condition is true. |
| 227 | `    this.showCreatePlanModal = false;` | Core implementation line contributing to the file behavior. |
| 228 | `    this.showPlanDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 229 | `    this.selectedPlanSummary = null;` | Core implementation line contributing to the file behavior. |
| 230 | `    this.selectedPlanDetail = null;` | Core implementation line contributing to the file behavior. |
| 231 | `  }` | Closes the current code/style block scope. |
| 232 | `` | Blank line used to separate logical blocks for readability. |
| 233 | `  toggleAssignedMember(memberId: string, checked: boolean): void {` | Begins a new code/style block scope. |
| 234 | `    if (checked) {` | Conditional branch: executes block only when condition is true. |
| 235 | `      if (!this.planForm.assignedMemberIds.includes(memberId)) {` | Conditional branch: executes block only when condition is true. |
| 236 | `        this.planForm.assignedMemberIds = [...this.planForm.assignedMemberIds, memberId];` | Core implementation line contributing to the file behavior. |
| 237 | `      }` | Closes the current code/style block scope. |
| 238 | `      return;` | Core implementation line contributing to the file behavior. |
| 239 | `    }` | Closes the current code/style block scope. |
| 240 | `    this.planForm.assignedMemberIds = this.planForm.assignedMemberIds.filter((id) => id !== memberId);` | Core implementation line contributing to the file behavior. |
| 241 | `  }` | Closes the current code/style block scope. |
| 242 | `` | Blank line used to separate logical blocks for readability. |
| 243 | `  addPlanItem(): void {` | Begins a new code/style block scope. |
| 244 | `    this.planForm.planItems.push({` | Begins a new code/style block scope. |
| 245 | `      exerciseId: '',` | Core implementation line contributing to the file behavior. |
| 246 | `      sequence: this.planForm.planItems.length + 1,` | Core implementation line contributing to the file behavior. |
| 247 | `      targetSet: 3,` | Core implementation line contributing to the file behavior. |
| 248 | `      targetRep: 10,` | Core implementation line contributing to the file behavior. |
| 249 | `      targetWeight: 0,` | Core implementation line contributing to the file behavior. |
| 250 | `      dayOfWeek: 'MON',` | Core implementation line contributing to the file behavior. |
| 251 | `      notes: '',` | Core implementation line contributing to the file behavior. |
| 252 | `    });` | Core implementation line contributing to the file behavior. |
| 253 | `  }` | Closes the current code/style block scope. |
| 254 | `` | Blank line used to separate logical blocks for readability. |
| 255 | `  removePlanItem(index: number): void {` | Begins a new code/style block scope. |
| 256 | `    this.planForm.planItems = this.planForm.planItems.filter((_, i) => i !== index);` | Core implementation line contributing to the file behavior. |
| 257 | `    this.planForm.planItems = this.planForm.planItems.map((it, i) => ({ ...it, sequence: i + 1 }));` | CSS declaration assigning a style property value. |
| 258 | `  }` | Closes the current code/style block scope. |
| 259 | `` | Blank line used to separate logical blocks for readability. |
| 260 | `  createWorkoutPlan(): void {` | Begins a new code/style block scope. |
| 261 | `    if (this.creatingPlan) return;` | Conditional branch: executes block only when condition is true. |
| 262 | `    if (!this.planForm.title.trim()) {` | Conditional branch: executes block only when condition is true. |
| 263 | `      this.errorMessage = 'Workout plan title is required.';` | Core implementation line contributing to the file behavior. |
| 264 | `      return;` | Core implementation line contributing to the file behavior. |
| 265 | `    }` | Closes the current code/style block scope. |
| 266 | `    if (!this.planForm.assignedMemberIds.length) {` | Conditional branch: executes block only when condition is true. |
| 267 | `      this.errorMessage = 'Assign at least one booked member.';` | Core implementation line contributing to the file behavior. |
| 268 | `      return;` | Core implementation line contributing to the file behavior. |
| 269 | `    }` | Closes the current code/style block scope. |
| 270 | `    const invalidItem = this.planForm.planItems.some((item) => !item.exerciseId);` | Core implementation line contributing to the file behavior. |
| 271 | `    if (invalidItem) {` | Conditional branch: executes block only when condition is true. |
| 272 | `      this.errorMessage = 'Each plan item must select an exercise.';` | Core implementation line contributing to the file behavior. |
| 273 | `      return;` | Core implementation line contributing to the file behavior. |
| 274 | `    }` | Closes the current code/style block scope. |
| 275 | `` | Blank line used to separate logical blocks for readability. |
| 276 | `    this.creatingPlan = true;` | Core implementation line contributing to the file behavior. |
| 277 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 278 | `    this.trainerService.createWorkoutPlan({` | Begins a new code/style block scope. |
| 279 | `      title: this.planForm.title,` | Core implementation line contributing to the file behavior. |
| 280 | `      duration: Number(this.planForm.duration),` | Core implementation line contributing to the file behavior. |
| 281 | `      status: this.planForm.status,` | Core implementation line contributing to the file behavior. |
| 282 | `      visibility: this.planForm.visibility,` | Core implementation line contributing to the file behavior. |
| 283 | `      assignedMemberIds: this.planForm.assignedMemberIds,` | Core implementation line contributing to the file behavior. |
| 284 | `      planItems: this.planForm.planItems.map((item, i) => ({` | Begins a new code/style block scope. |
| 285 | `        exerciseId: item.exerciseId,` | Core implementation line contributing to the file behavior. |
| 286 | `        sequence: Number(item.sequence ?? i + 1),` | Core implementation line contributing to the file behavior. |
| 287 | `        targetSet: Number(item.targetSet),` | Core implementation line contributing to the file behavior. |
| 288 | `        targetRep: Number(item.targetRep),` | Core implementation line contributing to the file behavior. |
| 289 | `        targetWeight: Number(item.targetWeight),` | Core implementation line contributing to the file behavior. |
| 290 | `        dayOfWeek: item.dayOfWeek,` | Core implementation line contributing to the file behavior. |
| 291 | `        notes: item.notes \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 292 | `      })),` | Core implementation line contributing to the file behavior. |
| 293 | `    }).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 294 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 295 | `        this.creatingPlan = false;` | Core implementation line contributing to the file behavior. |
| 296 | `        this.showCreatePlanModal = false;` | Core implementation line contributing to the file behavior. |
| 297 | `        this.successMessage = 'Workout plan created successfully.';` | Core implementation line contributing to the file behavior. |
| 298 | `        this.loadData();` | Core implementation line contributing to the file behavior. |
| 299 | `      },` | Core implementation line contributing to the file behavior. |
| 300 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 301 | `        this.creatingPlan = false;` | Core implementation line contributing to the file behavior. |
| 302 | `        this.errorMessage = 'Could not create workout plan.';` | Core implementation line contributing to the file behavior. |
| 303 | `      },` | Core implementation line contributing to the file behavior. |
| 304 | `    });` | Core implementation line contributing to the file behavior. |
| 305 | `  }` | Closes the current code/style block scope. |
| 306 | `` | Blank line used to separate logical blocks for readability. |
| 307 | `  openPlanDetail(plan: any): void {` | Begins a new code/style block scope. |
| 308 | `    this.selectedPlanSummary = plan;` | Core implementation line contributing to the file behavior. |
| 309 | `    this.showPlanDetailModal = true;` | Core implementation line contributing to the file behavior. |
| 310 | `    this.loadingPlanDetail = true;` | Core implementation line contributing to the file behavior. |
| 311 | `    this.selectedPlanDetail = null;` | Core implementation line contributing to the file behavior. |
| 312 | `    this.trainerService.getWorkoutPlanById(plan.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 313 | `      next: (detail) => {` | Arrow function definition, often used for callbacks. |
| 314 | `        this.selectedPlanDetail = {` | Begins a new code/style block scope. |
| 315 | `          ...detail,` | Core implementation line contributing to the file behavior. |
| 316 | `          planItems: detail?.planItems ?? detail?.items ?? [],` | Core implementation line contributing to the file behavior. |
| 317 | `        };` | Core implementation line contributing to the file behavior. |
| 318 | `        this.loadingPlanDetail = false;` | Core implementation line contributing to the file behavior. |
| 319 | `      },` | Core implementation line contributing to the file behavior. |
| 320 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 321 | `        this.loadingPlanDetail = false;` | Core implementation line contributing to the file behavior. |
| 322 | `        this.errorMessage = 'Could not load workout plan details.';` | Core implementation line contributing to the file behavior. |
| 323 | `      },` | Core implementation line contributing to the file behavior. |
| 324 | `    });` | Core implementation line contributing to the file behavior. |
| 325 | `  }` | Closes the current code/style block scope. |
| 326 | `` | Blank line used to separate logical blocks for readability. |
| 327 | `  async deleteWorkoutPlan(): Promise<void> {` | Begins a new code/style block scope. |
| 328 | `    const planId = this.selectedPlanSummary?.id \|\| this.selectedPlanDetail?.id;` | Core implementation line contributing to the file behavior. |
| 329 | `    if (!planId \|\| this.deletingPlan) return;` | Conditional branch: executes block only when condition is true. |
| 330 | `    const confirmed = await this.confirmDialog.confirm('Delete this workout plan?', {` | Begins a new code/style block scope. |
| 331 | `      title: 'Confirm Delete Workout Plan',` | Core implementation line contributing to the file behavior. |
| 332 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 333 | `    });` | Core implementation line contributing to the file behavior. |
| 334 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 335 | `    this.deletingPlan = true;` | Core implementation line contributing to the file behavior. |
| 336 | `    this.trainerService.deleteWorkoutPlan(planId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 337 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 338 | `        this.deletingPlan = false;` | Core implementation line contributing to the file behavior. |
| 339 | `        this.showPlanDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 340 | `        this.selectedPlanSummary = null;` | Core implementation line contributing to the file behavior. |
| 341 | `        this.selectedPlanDetail = null;` | Core implementation line contributing to the file behavior. |
| 342 | `        this.successMessage = 'Workout plan deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 343 | `        this.loadData();` | Core implementation line contributing to the file behavior. |
| 344 | `      },` | Core implementation line contributing to the file behavior. |
| 345 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 346 | `        this.deletingPlan = false;` | Core implementation line contributing to the file behavior. |
| 347 | `        this.errorMessage = 'Could not delete workout plan.';` | Core implementation line contributing to the file behavior. |
| 348 | `      },` | Core implementation line contributing to the file behavior. |
| 349 | `    });` | Core implementation line contributing to the file behavior. |
| 350 | `  }` | Closes the current code/style block scope. |
| 351 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.