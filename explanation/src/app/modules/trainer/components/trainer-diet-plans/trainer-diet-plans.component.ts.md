# Explanation: `src/app/modules/trainer/components/trainer-diet-plans/trainer-diet-plans.component.ts`

## File Overview
- **Relative path:** `src/app/modules/trainer/components/trainer-diet-plans/trainer-diet-plans.component.ts`
- **Total lines:** `440`
- **Non-empty lines:** `400`
- **Import statements:** `5`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `4`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 3 | `import { FormsModule } from '@angular/forms';` | Imports a dependency so this file can use external symbols. |
| 4 | `import { TrainerService } from '../../services/trainer.service';` | Imports a dependency so this file can use external symbols. |
| 5 | `import { ConfirmDialogService } from '../../../../services/confirm-dialog.service';` | Imports a dependency so this file can use external symbols. |
| 6 | `` | Blank line used to separate logical blocks for readability. |
| 7 | `@Component({` | Angular decorator declaring metadata for this component. |
| 8 | `  selector: 'app-trainer-diet-plans',` | Core implementation line contributing to the file behavior. |
| 9 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 10 | `  imports: [CommonModule, FormsModule],` | Core implementation line contributing to the file behavior. |
| 11 | `  templateUrl: './trainer-diet-plans.component.html',` | Core implementation line contributing to the file behavior. |
| 12 | `  styleUrl: './trainer-diet-plans.component.css',` | Core implementation line contributing to the file behavior. |
| 13 | `})` | Core implementation line contributing to the file behavior. |
| 14 | `export class TrainerDietPlansComponent {` | Exports symbols so other files can import this logic. |
| 15 | `  loading = true;` | Core implementation line contributing to the file behavior. |
| 16 | `  loadingDetail = false;` | Core implementation line contributing to the file behavior. |
| 17 | `  submitting = false;` | Core implementation line contributing to the file behavior. |
| 18 | `  assigning = false;` | Core implementation line contributing to the file behavior. |
| 19 | `  deleting = false;` | Core implementation line contributing to the file behavior. |
| 20 | `` | Blank line used to separate logical blocks for readability. |
| 21 | `  successMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 22 | `  errorMessage: string \| null = null;` | CSS declaration assigning a style property value. |
| 23 | `` | Blank line used to separate logical blocks for readability. |
| 24 | `  dietPlans: any[] = [];` | CSS declaration assigning a style property value. |
| 25 | `  bookedMembers: Array<{ id: string; name: string; email?: string }> = [];` | CSS declaration assigning a style property value. |
| 26 | `` | Blank line used to separate logical blocks for readability. |
| 27 | `  filters = {` | Begins a new code/style block scope. |
| 28 | `    page: 1,` | Core implementation line contributing to the file behavior. |
| 29 | `    limit: 10,` | Core implementation line contributing to the file behavior. |
| 30 | `    status: 'ACTIVE',` | Core implementation line contributing to the file behavior. |
| 31 | `    includeArchived: false,` | Core implementation line contributing to the file behavior. |
| 32 | `  };` | Core implementation line contributing to the file behavior. |
| 33 | `` | Blank line used to separate logical blocks for readability. |
| 34 | `  pageInfo = {` | Begins a new code/style block scope. |
| 35 | `    totalDocs: 0,` | Core implementation line contributing to the file behavior. |
| 36 | `    totalPages: 1,` | Core implementation line contributing to the file behavior. |
| 37 | `    currentPage: 1,` | Core implementation line contributing to the file behavior. |
| 38 | `    hasNext: false,` | Core implementation line contributing to the file behavior. |
| 39 | `    hasPrev: false,` | Core implementation line contributing to the file behavior. |
| 40 | `    nextPage: null as number \| null,` | Core implementation line contributing to the file behavior. |
| 41 | `    previousPage: null as number \| null,` | Core implementation line contributing to the file behavior. |
| 42 | `  };` | Core implementation line contributing to the file behavior. |
| 43 | `` | Blank line used to separate logical blocks for readability. |
| 44 | `  showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 45 | `  showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 46 | `  selectedPlanSummary: any \| null = null;` | CSS declaration assigning a style property value. |
| 47 | `  selectedPlanDetail: any \| null = null;` | CSS declaration assigning a style property value. |
| 48 | `` | Blank line used to separate logical blocks for readability. |
| 49 | `  createForm = {` | Begins a new code/style block scope. |
| 50 | `    title: '',` | Core implementation line contributing to the file behavior. |
| 51 | `    description: '',` | Core implementation line contributing to the file behavior. |
| 52 | `    durationDays: 30,` | Core implementation line contributing to the file behavior. |
| 53 | `    calorieTarget: 2400,` | Core implementation line contributing to the file behavior. |
| 54 | `    meals: [this.newMeal(1)],` | Core implementation line contributing to the file behavior. |
| 55 | `  };` | Core implementation line contributing to the file behavior. |
| 56 | `` | Blank line used to separate logical blocks for readability. |
| 57 | `  editForm = {` | Begins a new code/style block scope. |
| 58 | `    title: '',` | Core implementation line contributing to the file behavior. |
| 59 | `    description: '',` | Core implementation line contributing to the file behavior. |
| 60 | `    durationDays: 30,` | Core implementation line contributing to the file behavior. |
| 61 | `    calorieTarget: 2400,` | Core implementation line contributing to the file behavior. |
| 62 | `    status: 'ACTIVE',` | Core implementation line contributing to the file behavior. |
| 63 | `    meals: [this.newMeal(1)],` | Core implementation line contributing to the file behavior. |
| 64 | `  };` | Core implementation line contributing to the file behavior. |
| 65 | `` | Blank line used to separate logical blocks for readability. |
| 66 | `  assignment = {` | Begins a new code/style block scope. |
| 67 | `    effectiveFrom: '',` | Core implementation line contributing to the file behavior. |
| 68 | `    effectiveTo: '',` | Core implementation line contributing to the file behavior. |
| 69 | `    memberIds: [] as string[],` | Core implementation line contributing to the file behavior. |
| 70 | `  };` | Core implementation line contributing to the file behavior. |
| 71 | `` | Blank line used to separate logical blocks for readability. |
| 72 | `  constructor(` | Class constructor for dependency injection and initial setup. |
| 73 | `    private trainerService: TrainerService,` | Core implementation line contributing to the file behavior. |
| 74 | `    private confirmDialog: ConfirmDialogService` | Core implementation line contributing to the file behavior. |
| 75 | `  ) {}` | Core implementation line contributing to the file behavior. |
| 76 | `` | Blank line used to separate logical blocks for readability. |
| 77 | `  ngOnInit(): void {` | Angular lifecycle hook that runs after component initialization. |
| 78 | `    this.loadBookedMembers();` | Core implementation line contributing to the file behavior. |
| 79 | `    this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 80 | `  }` | Closes the current code/style block scope. |
| 81 | `` | Blank line used to separate logical blocks for readability. |
| 82 | `  private newMeal(sequence: number) {` | Begins a new code/style block scope. |
| 83 | `    return {` | Returns a value from the current function/method. |
| 84 | `      sequence,` | Core implementation line contributing to the file behavior. |
| 85 | `      mealType: 'BREAKFAST',` | Core implementation line contributing to the file behavior. |
| 86 | `      mealTitle: '',` | Core implementation line contributing to the file behavior. |
| 87 | `      scheduledTime: '07:30:00',` | Core implementation line contributing to the file behavior. |
| 88 | `      foodItemsText: '',` | Core implementation line contributing to the file behavior. |
| 89 | `      calories: 500,` | Core implementation line contributing to the file behavior. |
| 90 | `      proteinGrams: 30,` | Core implementation line contributing to the file behavior. |
| 91 | `      carbsGrams: 50,` | Core implementation line contributing to the file behavior. |
| 92 | `      fatGrams: 15,` | Core implementation line contributing to the file behavior. |
| 93 | `      notes: '',` | Core implementation line contributing to the file behavior. |
| 94 | `    };` | Core implementation line contributing to the file behavior. |
| 95 | `  }` | Closes the current code/style block scope. |
| 96 | `` | Blank line used to separate logical blocks for readability. |
| 97 | `  private clearMessages(): void {` | Begins a new code/style block scope. |
| 98 | `    this.successMessage = null;` | Core implementation line contributing to the file behavior. |
| 99 | `    this.errorMessage = null;` | Core implementation line contributing to the file behavior. |
| 100 | `  }` | Closes the current code/style block scope. |
| 101 | `` | Blank line used to separate logical blocks for readability. |
| 102 | `  private extractBookedMembers(bookings: any[]): Array<{ id: string; name: string; email?: string }> {` | Begins a new code/style block scope. |
| 103 | `    const blockedStatuses = new Set(['cancelled', 'rejected']);` | Core implementation line contributing to the file behavior. |
| 104 | `    const map = new Map<string, { id: string; name: string; email?: string }>();` | CSS declaration assigning a style property value. |
| 105 | `    for (const b of bookings ?? []) {` | Loop iterating across a collection or numeric range. |
| 106 | `      const status = String(b?.status ?? '').toLowerCase();` | Core implementation line contributing to the file behavior. |
| 107 | `      if (blockedStatuses.has(status)) continue;` | Conditional branch: executes block only when condition is true. |
| 108 | `      const member = b?.member ?? b?.user ?? null;` | Core implementation line contributing to the file behavior. |
| 109 | `      if (!member?.id) continue;` | Conditional branch: executes block only when condition is true. |
| 110 | `      map.set(member.id, {` | Begins a new code/style block scope. |
| 111 | `        id: member.id,` | Core implementation line contributing to the file behavior. |
| 112 | `        name: \`${member.firstName ?? ''} ${member.lastName ?? ''}\`.trim() \|\| member.email \|\| 'Member',` | Core implementation line contributing to the file behavior. |
| 113 | `        email: member.email,` | Core implementation line contributing to the file behavior. |
| 114 | `      });` | Core implementation line contributing to the file behavior. |
| 115 | `    }` | Closes the current code/style block scope. |
| 116 | `    return Array.from(map.values());` | Returns a value from the current function/method. |
| 117 | `  }` | Closes the current code/style block scope. |
| 118 | `` | Blank line used to separate logical blocks for readability. |
| 119 | `  loadBookedMembers(): void {` | Begins a new code/style block scope. |
| 120 | `    this.trainerService.getTrainerMyBookings().subscribe({` | Subscribes to an Observable to react to async emissions. |
| 121 | `      next: (bookings) => (this.bookedMembers = this.extractBookedMembers(bookings ?? [])),` | Core implementation line contributing to the file behavior. |
| 122 | `      error: () => (this.bookedMembers = []),` | Core implementation line contributing to the file behavior. |
| 123 | `    });` | Core implementation line contributing to the file behavior. |
| 124 | `  }` | Closes the current code/style block scope. |
| 125 | `` | Blank line used to separate logical blocks for readability. |
| 126 | `  loadDietPlans(): void {` | Begins a new code/style block scope. |
| 127 | `    this.loading = true;` | Core implementation line contributing to the file behavior. |
| 128 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 129 | `    this.trainerService.listDietPlans(this.filters).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 130 | `      next: (res) => {` | Arrow function definition, often used for callbacks. |
| 131 | `        this.dietPlans = res.docs ?? [];` | Core implementation line contributing to the file behavior. |
| 132 | `        this.pageInfo = {` | Begins a new code/style block scope. |
| 133 | `          totalDocs: res.totalDocs ?? 0,` | Core implementation line contributing to the file behavior. |
| 134 | `          totalPages: res.totalPages ?? 1,` | Core implementation line contributing to the file behavior. |
| 135 | `          currentPage: res.currentPage ?? this.filters.page,` | Core implementation line contributing to the file behavior. |
| 136 | `          hasNext: res.hasNext ?? false,` | Core implementation line contributing to the file behavior. |
| 137 | `          hasPrev: res.hasPrev ?? false,` | Core implementation line contributing to the file behavior. |
| 138 | `          nextPage: res.nextPage ?? null,` | Core implementation line contributing to the file behavior. |
| 139 | `          previousPage: res.previousPage ?? null,` | Core implementation line contributing to the file behavior. |
| 140 | `        };` | Core implementation line contributing to the file behavior. |
| 141 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 142 | `      },` | Core implementation line contributing to the file behavior. |
| 143 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 144 | `        this.loading = false;` | Core implementation line contributing to the file behavior. |
| 145 | `        this.errorMessage = 'Could not load diet plans.';` | Core implementation line contributing to the file behavior. |
| 146 | `      },` | Core implementation line contributing to the file behavior. |
| 147 | `    });` | Core implementation line contributing to the file behavior. |
| 148 | `  }` | Closes the current code/style block scope. |
| 149 | `` | Blank line used to separate logical blocks for readability. |
| 150 | `  applyFilters(): void {` | Begins a new code/style block scope. |
| 151 | `    this.filters.page = 1;` | Core implementation line contributing to the file behavior. |
| 152 | `    this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 153 | `  }` | Closes the current code/style block scope. |
| 154 | `` | Blank line used to separate logical blocks for readability. |
| 155 | `  goToPrevious(): void {` | Begins a new code/style block scope. |
| 156 | `    if (!this.pageInfo.hasPrev \|\| !this.pageInfo.previousPage) return;` | Conditional branch: executes block only when condition is true. |
| 157 | `    this.filters.page = this.pageInfo.previousPage;` | Core implementation line contributing to the file behavior. |
| 158 | `    this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 159 | `  }` | Closes the current code/style block scope. |
| 160 | `` | Blank line used to separate logical blocks for readability. |
| 161 | `  goToNext(): void {` | Begins a new code/style block scope. |
| 162 | `    if (!this.pageInfo.hasNext \|\| !this.pageInfo.nextPage) return;` | Conditional branch: executes block only when condition is true. |
| 163 | `    this.filters.page = this.pageInfo.nextPage;` | Core implementation line contributing to the file behavior. |
| 164 | `    this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 165 | `  }` | Closes the current code/style block scope. |
| 166 | `` | Blank line used to separate logical blocks for readability. |
| 167 | `  openCreateModal(): void {` | Begins a new code/style block scope. |
| 168 | `    this.createForm = {` | Begins a new code/style block scope. |
| 169 | `      title: '',` | Core implementation line contributing to the file behavior. |
| 170 | `      description: '',` | Core implementation line contributing to the file behavior. |
| 171 | `      durationDays: 30,` | Core implementation line contributing to the file behavior. |
| 172 | `      calorieTarget: 2400,` | Core implementation line contributing to the file behavior. |
| 173 | `      meals: [this.newMeal(1)],` | Core implementation line contributing to the file behavior. |
| 174 | `    };` | Core implementation line contributing to the file behavior. |
| 175 | `    this.showCreateModal = true;` | Core implementation line contributing to the file behavior. |
| 176 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 177 | `  }` | Closes the current code/style block scope. |
| 178 | `` | Blank line used to separate logical blocks for readability. |
| 179 | `  closeCreateModal(): void {` | Begins a new code/style block scope. |
| 180 | `    if (this.submitting) return;` | Conditional branch: executes block only when condition is true. |
| 181 | `    this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 182 | `  }` | Closes the current code/style block scope. |
| 183 | `` | Blank line used to separate logical blocks for readability. |
| 184 | `  addCreateMeal(): void {` | Begins a new code/style block scope. |
| 185 | `    this.createForm.meals.push(this.newMeal(this.createForm.meals.length + 1));` | Core implementation line contributing to the file behavior. |
| 186 | `  }` | Closes the current code/style block scope. |
| 187 | `` | Blank line used to separate logical blocks for readability. |
| 188 | `  removeCreateMeal(index: number): void {` | Begins a new code/style block scope. |
| 189 | `    if (this.createForm.meals.length === 1) return;` | Conditional branch: executes block only when condition is true. |
| 190 | `    this.createForm.meals = this.createForm.meals.filter((_, i) => i !== index);` | Core implementation line contributing to the file behavior. |
| 191 | `    this.createForm.meals = this.createForm.meals.map((meal, i) => ({ ...meal, sequence: i + 1 }));` | CSS declaration assigning a style property value. |
| 192 | `  }` | Closes the current code/style block scope. |
| 193 | `` | Blank line used to separate logical blocks for readability. |
| 194 | `  createDietPlan(): void {` | Begins a new code/style block scope. |
| 195 | `    if (this.submitting) return;` | Conditional branch: executes block only when condition is true. |
| 196 | `    if (!this.createForm.title.trim()) {` | Conditional branch: executes block only when condition is true. |
| 197 | `      this.errorMessage = 'Diet plan title is required.';` | Core implementation line contributing to the file behavior. |
| 198 | `      return;` | Core implementation line contributing to the file behavior. |
| 199 | `    }` | Closes the current code/style block scope. |
| 200 | `` | Blank line used to separate logical blocks for readability. |
| 201 | `    this.submitting = true;` | Core implementation line contributing to the file behavior. |
| 202 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 203 | `    this.trainerService` | Core implementation line contributing to the file behavior. |
| 204 | `      .createDietPlan({` | Begins a new code/style block scope. |
| 205 | `        title: this.createForm.title,` | Core implementation line contributing to the file behavior. |
| 206 | `        description: this.createForm.description,` | Core implementation line contributing to the file behavior. |
| 207 | `        durationDays: Number(this.createForm.durationDays),` | Core implementation line contributing to the file behavior. |
| 208 | `        calorieTarget: Number(this.createForm.calorieTarget),` | Core implementation line contributing to the file behavior. |
| 209 | `        meals: this.createForm.meals.map((meal, i) => ({` | Begins a new code/style block scope. |
| 210 | `          sequence: Number(meal.sequence \|\| i + 1),` | Core implementation line contributing to the file behavior. |
| 211 | `          mealType: meal.mealType,` | Core implementation line contributing to the file behavior. |
| 212 | `          mealTitle: meal.mealTitle,` | Core implementation line contributing to the file behavior. |
| 213 | `          scheduledTime: meal.scheduledTime,` | Core implementation line contributing to the file behavior. |
| 214 | `          foodItemsText: meal.foodItemsText,` | Core implementation line contributing to the file behavior. |
| 215 | `          calories: Number(meal.calories),` | Core implementation line contributing to the file behavior. |
| 216 | `          proteinGrams: Number(meal.proteinGrams),` | Core implementation line contributing to the file behavior. |
| 217 | `          carbsGrams: Number(meal.carbsGrams),` | Core implementation line contributing to the file behavior. |
| 218 | `          fatGrams: Number(meal.fatGrams),` | Core implementation line contributing to the file behavior. |
| 219 | `          notes: meal.notes \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 220 | `        })),` | Core implementation line contributing to the file behavior. |
| 221 | `      })` | Core implementation line contributing to the file behavior. |
| 222 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 223 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 224 | `          this.submitting = false;` | Core implementation line contributing to the file behavior. |
| 225 | `          this.showCreateModal = false;` | Core implementation line contributing to the file behavior. |
| 226 | `          this.successMessage = 'Diet plan created successfully.';` | Core implementation line contributing to the file behavior. |
| 227 | `          this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 228 | `        },` | Core implementation line contributing to the file behavior. |
| 229 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 230 | `          this.submitting = false;` | Core implementation line contributing to the file behavior. |
| 231 | `          this.errorMessage = 'Could not create diet plan.';` | Core implementation line contributing to the file behavior. |
| 232 | `        },` | Core implementation line contributing to the file behavior. |
| 233 | `      });` | Core implementation line contributing to the file behavior. |
| 234 | `  }` | Closes the current code/style block scope. |
| 235 | `` | Blank line used to separate logical blocks for readability. |
| 236 | `  openDetail(plan: any): void {` | Begins a new code/style block scope. |
| 237 | `    this.showDetailModal = true;` | Core implementation line contributing to the file behavior. |
| 238 | `    this.selectedPlanSummary = plan;` | Core implementation line contributing to the file behavior. |
| 239 | `    this.selectedPlanDetail = null;` | Core implementation line contributing to the file behavior. |
| 240 | `    this.loadingDetail = true;` | Core implementation line contributing to the file behavior. |
| 241 | `    this.assignment = { effectiveFrom: '', effectiveTo: '', memberIds: [] };` | CSS declaration assigning a style property value. |
| 242 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 243 | `` | Blank line used to separate logical blocks for readability. |
| 244 | `    this.trainerService.getDietPlanById(plan.id).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 245 | `      next: (detail) => {` | Arrow function definition, often used for callbacks. |
| 246 | `        this.selectedPlanDetail = detail;` | Core implementation line contributing to the file behavior. |
| 247 | `        const meals = (detail?.meals ?? []).map((m: any, i: number) => ({` | Begins a new code/style block scope. |
| 248 | `          sequence: Number(m.sequence ?? i + 1),` | Core implementation line contributing to the file behavior. |
| 249 | `          mealType: m.mealType ?? 'BREAKFAST',` | Core implementation line contributing to the file behavior. |
| 250 | `          mealTitle: m.mealTitle ?? '',` | Core implementation line contributing to the file behavior. |
| 251 | `          scheduledTime: m.scheduledTime ?? '07:30:00',` | Core implementation line contributing to the file behavior. |
| 252 | `          foodItemsText: m.foodItemsText ?? '',` | Core implementation line contributing to the file behavior. |
| 253 | `          calories: Number(m.calories ?? 0),` | Core implementation line contributing to the file behavior. |
| 254 | `          proteinGrams: Number(m.proteinGrams ?? 0),` | Core implementation line contributing to the file behavior. |
| 255 | `          carbsGrams: Number(m.carbsGrams ?? 0),` | Core implementation line contributing to the file behavior. |
| 256 | `          fatGrams: Number(m.fatGrams ?? 0),` | Core implementation line contributing to the file behavior. |
| 257 | `          notes: m.notes ?? '',` | Core implementation line contributing to the file behavior. |
| 258 | `        }));` | Core implementation line contributing to the file behavior. |
| 259 | `        this.editForm = {` | Begins a new code/style block scope. |
| 260 | `          title: detail?.title ?? '',` | Core implementation line contributing to the file behavior. |
| 261 | `          description: detail?.description ?? '',` | Core implementation line contributing to the file behavior. |
| 262 | `          durationDays: Number(detail?.durationDays ?? 30),` | Core implementation line contributing to the file behavior. |
| 263 | `          calorieTarget: Number(detail?.calorieTarget ?? 2400),` | Core implementation line contributing to the file behavior. |
| 264 | `          status: detail?.status ?? 'ACTIVE',` | Core implementation line contributing to the file behavior. |
| 265 | `          meals: meals.length ? meals : [this.newMeal(1)],` | Core implementation line contributing to the file behavior. |
| 266 | `        };` | Core implementation line contributing to the file behavior. |
| 267 | `        this.loadingDetail = false;` | Core implementation line contributing to the file behavior. |
| 268 | `      },` | Core implementation line contributing to the file behavior. |
| 269 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 270 | `        this.loadingDetail = false;` | Core implementation line contributing to the file behavior. |
| 271 | `        this.errorMessage = 'Could not load diet plan detail.';` | Core implementation line contributing to the file behavior. |
| 272 | `      },` | Core implementation line contributing to the file behavior. |
| 273 | `    });` | Core implementation line contributing to the file behavior. |
| 274 | `  }` | Closes the current code/style block scope. |
| 275 | `` | Blank line used to separate logical blocks for readability. |
| 276 | `  closeDetailModal(): void {` | Begins a new code/style block scope. |
| 277 | `    if (this.submitting \|\| this.assigning \|\| this.deleting) return;` | Conditional branch: executes block only when condition is true. |
| 278 | `    this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 279 | `    this.selectedPlanSummary = null;` | Core implementation line contributing to the file behavior. |
| 280 | `    this.selectedPlanDetail = null;` | Core implementation line contributing to the file behavior. |
| 281 | `  }` | Closes the current code/style block scope. |
| 282 | `` | Blank line used to separate logical blocks for readability. |
| 283 | `  addEditMeal(): void {` | Begins a new code/style block scope. |
| 284 | `    this.editForm.meals.push(this.newMeal(this.editForm.meals.length + 1));` | Core implementation line contributing to the file behavior. |
| 285 | `  }` | Closes the current code/style block scope. |
| 286 | `` | Blank line used to separate logical blocks for readability. |
| 287 | `  removeEditMeal(index: number): void {` | Begins a new code/style block scope. |
| 288 | `    if (this.editForm.meals.length === 1) return;` | Conditional branch: executes block only when condition is true. |
| 289 | `    this.editForm.meals = this.editForm.meals.filter((_, i) => i !== index);` | Core implementation line contributing to the file behavior. |
| 290 | `    this.editForm.meals = this.editForm.meals.map((meal, i) => ({ ...meal, sequence: i + 1 }));` | CSS declaration assigning a style property value. |
| 291 | `  }` | Closes the current code/style block scope. |
| 292 | `` | Blank line used to separate logical blocks for readability. |
| 293 | `  private isAssigned(plan: any): boolean {` | Begins a new code/style block scope. |
| 294 | `    const count = Number(plan?.assignedCount ?? plan?.totalAssignments ?? 0);` | Core implementation line contributing to the file behavior. |
| 295 | `    const assignmentLength = Array.isArray(plan?.assignments) ? plan.assignments.length : 0;` | CSS declaration assigning a style property value. |
| 296 | `    return count > 0 \|\| assignmentLength > 0 \|\| Boolean(plan?.isAssigned);` | Returns a value from the current function/method. |
| 297 | `  }` | Closes the current code/style block scope. |
| 298 | `` | Blank line used to separate logical blocks for readability. |
| 299 | `  canUpdateSelected(): boolean {` | Begins a new code/style block scope. |
| 300 | `    const plan = this.selectedPlanDetail ?? this.selectedPlanSummary;` | Core implementation line contributing to the file behavior. |
| 301 | `    return String(plan?.status ?? '').toUpperCase() === 'ACTIVE' && !this.isAssigned(plan);` | Returns a value from the current function/method. |
| 302 | `  }` | Closes the current code/style block scope. |
| 303 | `` | Blank line used to separate logical blocks for readability. |
| 304 | `  canDeleteSelected(): boolean {` | Begins a new code/style block scope. |
| 305 | `    const plan = this.selectedPlanDetail ?? this.selectedPlanSummary;` | Core implementation line contributing to the file behavior. |
| 306 | `    const isDraft = String(plan?.status ?? '').toUpperCase() === 'DRAFT';` | Core implementation line contributing to the file behavior. |
| 307 | `    const visibility = String(plan?.visibility ?? 'PRIVATE').toUpperCase();` | Core implementation line contributing to the file behavior. |
| 308 | `    return isDraft && visibility === 'PRIVATE';` | Returns a value from the current function/method. |
| 309 | `  }` | Closes the current code/style block scope. |
| 310 | `` | Blank line used to separate logical blocks for readability. |
| 311 | `  updateDietPlan(): void {` | Begins a new code/style block scope. |
| 312 | `    const planId = this.selectedPlanSummary?.id ?? this.selectedPlanDetail?.id;` | Core implementation line contributing to the file behavior. |
| 313 | `    if (!planId \|\| !this.canUpdateSelected() \|\| this.submitting) return;` | Conditional branch: executes block only when condition is true. |
| 314 | `` | Blank line used to separate logical blocks for readability. |
| 315 | `    this.submitting = true;` | Core implementation line contributing to the file behavior. |
| 316 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 317 | `    this.trainerService` | Core implementation line contributing to the file behavior. |
| 318 | `      .updateDietPlan(planId, {` | Begins a new code/style block scope. |
| 319 | `        title: this.editForm.title,` | Core implementation line contributing to the file behavior. |
| 320 | `        description: this.editForm.description,` | Core implementation line contributing to the file behavior. |
| 321 | `        durationDays: Number(this.editForm.durationDays),` | Core implementation line contributing to the file behavior. |
| 322 | `        calorieTarget: Number(this.editForm.calorieTarget),` | Core implementation line contributing to the file behavior. |
| 323 | `        meals: this.editForm.meals.map((meal, i) => ({` | Begins a new code/style block scope. |
| 324 | `          sequence: Number(meal.sequence \|\| i + 1),` | Core implementation line contributing to the file behavior. |
| 325 | `          mealType: meal.mealType,` | Core implementation line contributing to the file behavior. |
| 326 | `          mealTitle: meal.mealTitle,` | Core implementation line contributing to the file behavior. |
| 327 | `          scheduledTime: meal.scheduledTime,` | Core implementation line contributing to the file behavior. |
| 328 | `          foodItemsText: meal.foodItemsText,` | Core implementation line contributing to the file behavior. |
| 329 | `          calories: Number(meal.calories),` | Core implementation line contributing to the file behavior. |
| 330 | `          proteinGrams: Number(meal.proteinGrams),` | Core implementation line contributing to the file behavior. |
| 331 | `          carbsGrams: Number(meal.carbsGrams),` | Core implementation line contributing to the file behavior. |
| 332 | `          fatGrams: Number(meal.fatGrams),` | Core implementation line contributing to the file behavior. |
| 333 | `          notes: meal.notes \|\| undefined,` | Core implementation line contributing to the file behavior. |
| 334 | `        })),` | Core implementation line contributing to the file behavior. |
| 335 | `        status: this.editForm.status \|\| 'ACTIVE',` | Core implementation line contributing to the file behavior. |
| 336 | `      })` | Core implementation line contributing to the file behavior. |
| 337 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 338 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 339 | `          this.submitting = false;` | Core implementation line contributing to the file behavior. |
| 340 | `          this.successMessage = 'Diet plan updated successfully.';` | Core implementation line contributing to the file behavior. |
| 341 | `          this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 342 | `          if (this.selectedPlanSummary?.id) {` | Conditional branch: executes block only when condition is true. |
| 343 | `            this.openDetail(this.selectedPlanSummary);` | Core implementation line contributing to the file behavior. |
| 344 | `          }` | Closes the current code/style block scope. |
| 345 | `        },` | Core implementation line contributing to the file behavior. |
| 346 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 347 | `          this.submitting = false;` | Core implementation line contributing to the file behavior. |
| 348 | `          this.errorMessage = 'Could not update diet plan.';` | Core implementation line contributing to the file behavior. |
| 349 | `        },` | Core implementation line contributing to the file behavior. |
| 350 | `      });` | Core implementation line contributing to the file behavior. |
| 351 | `  }` | Closes the current code/style block scope. |
| 352 | `` | Blank line used to separate logical blocks for readability. |
| 353 | `  async deleteDietPlan(): Promise<void> {` | Begins a new code/style block scope. |
| 354 | `    const planId = this.selectedPlanSummary?.id ?? this.selectedPlanDetail?.id;` | Core implementation line contributing to the file behavior. |
| 355 | `    if (!planId \|\| !this.canDeleteSelected() \|\| this.deleting) return;` | Conditional branch: executes block only when condition is true. |
| 356 | `    const confirmed = await this.confirmDialog.confirm('Delete this DRAFT private diet plan?', {` | Begins a new code/style block scope. |
| 357 | `      title: 'Confirm Delete Diet Plan',` | Core implementation line contributing to the file behavior. |
| 358 | `      confirmText: 'Delete',` | Core implementation line contributing to the file behavior. |
| 359 | `    });` | Core implementation line contributing to the file behavior. |
| 360 | `    if (!confirmed) return;` | Conditional branch: executes block only when condition is true. |
| 361 | `` | Blank line used to separate logical blocks for readability. |
| 362 | `    this.deleting = true;` | Core implementation line contributing to the file behavior. |
| 363 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 364 | `    this.trainerService.deleteDietPlan(planId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 365 | `      next: () => {` | Arrow function definition, often used for callbacks. |
| 366 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 367 | `        this.showDetailModal = false;` | Core implementation line contributing to the file behavior. |
| 368 | `        this.selectedPlanSummary = null;` | Core implementation line contributing to the file behavior. |
| 369 | `        this.selectedPlanDetail = null;` | Core implementation line contributing to the file behavior. |
| 370 | `        this.successMessage = 'Diet plan deleted successfully.';` | Core implementation line contributing to the file behavior. |
| 371 | `        this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 372 | `      },` | Core implementation line contributing to the file behavior. |
| 373 | `      error: () => {` | Arrow function definition, often used for callbacks. |
| 374 | `        this.deleting = false;` | Core implementation line contributing to the file behavior. |
| 375 | `        this.errorMessage = 'Could not delete diet plan.';` | Core implementation line contributing to the file behavior. |
| 376 | `      },` | Core implementation line contributing to the file behavior. |
| 377 | `    });` | Core implementation line contributing to the file behavior. |
| 378 | `  }` | Closes the current code/style block scope. |
| 379 | `` | Blank line used to separate logical blocks for readability. |
| 380 | `  toggleAssignmentMember(memberId: string, checked: boolean): void {` | Begins a new code/style block scope. |
| 381 | `    if (checked) {` | Conditional branch: executes block only when condition is true. |
| 382 | `      if (!this.assignment.memberIds.includes(memberId)) {` | Conditional branch: executes block only when condition is true. |
| 383 | `        this.assignment.memberIds = [...this.assignment.memberIds, memberId];` | Core implementation line contributing to the file behavior. |
| 384 | `      }` | Closes the current code/style block scope. |
| 385 | `      return;` | Core implementation line contributing to the file behavior. |
| 386 | `    }` | Closes the current code/style block scope. |
| 387 | `    this.assignment.memberIds = this.assignment.memberIds.filter((id) => id !== memberId);` | Core implementation line contributing to the file behavior. |
| 388 | `  }` | Closes the current code/style block scope. |
| 389 | `` | Blank line used to separate logical blocks for readability. |
| 390 | `  assignAndArchive(): void {` | Begins a new code/style block scope. |
| 391 | `    const planId = this.selectedPlanSummary?.id ?? this.selectedPlanDetail?.id;` | Core implementation line contributing to the file behavior. |
| 392 | `    if (!planId \|\| this.assigning) return;` | Conditional branch: executes block only when condition is true. |
| 393 | `    if (String(this.selectedPlanDetail?.status ?? this.selectedPlanSummary?.status ?? '').toUpperCase() !== 'ACTIVE') {` | Conditional branch: executes block only when condition is true. |
| 394 | `      this.errorMessage = 'Only ACTIVE plans can be assigned.';` | Core implementation line contributing to the file behavior. |
| 395 | `      return;` | Core implementation line contributing to the file behavior. |
| 396 | `    }` | Closes the current code/style block scope. |
| 397 | `    if (!this.assignment.memberIds.length) {` | Conditional branch: executes block only when condition is true. |
| 398 | `      this.errorMessage = 'Choose at least one booked member.';` | Core implementation line contributing to the file behavior. |
| 399 | `      return;` | Core implementation line contributing to the file behavior. |
| 400 | `    }` | Closes the current code/style block scope. |
| 401 | `    if (!this.assignment.effectiveFrom \|\| !this.assignment.effectiveTo) {` | Conditional branch: executes block only when condition is true. |
| 402 | `      this.errorMessage = 'Please provide effective from/to dates.';` | Core implementation line contributing to the file behavior. |
| 403 | `      return;` | Core implementation line contributing to the file behavior. |
| 404 | `    }` | Closes the current code/style block scope. |
| 405 | `` | Blank line used to separate logical blocks for readability. |
| 406 | `    this.assigning = true;` | Core implementation line contributing to the file behavior. |
| 407 | `    this.clearMessages();` | Core implementation line contributing to the file behavior. |
| 408 | `    this.trainerService` | Core implementation line contributing to the file behavior. |
| 409 | `      .assignDietPlan(planId, {` | Begins a new code/style block scope. |
| 410 | `        assignments: this.assignment.memberIds.map((memberId) => ({` | Begins a new code/style block scope. |
| 411 | `          memberId,` | Core implementation line contributing to the file behavior. |
| 412 | `          effectiveFrom: this.assignment.effectiveFrom,` | Core implementation line contributing to the file behavior. |
| 413 | `          effectiveTo: this.assignment.effectiveTo,` | Core implementation line contributing to the file behavior. |
| 414 | `        })),` | Core implementation line contributing to the file behavior. |
| 415 | `      })` | Core implementation line contributing to the file behavior. |
| 416 | `      .subscribe({` | Subscribes to an Observable to react to async emissions. |
| 417 | `        next: () => {` | Arrow function definition, often used for callbacks. |
| 418 | `          this.trainerService.archiveDietPlan(planId).subscribe({` | Subscribes to an Observable to react to async emissions. |
| 419 | `            next: () => {` | Arrow function definition, often used for callbacks. |
| 420 | `              this.assigning = false;` | Core implementation line contributing to the file behavior. |
| 421 | `              this.successMessage = 'Diet plan assigned and archived successfully.';` | Core implementation line contributing to the file behavior. |
| 422 | `              this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 423 | `              if (this.selectedPlanSummary?.id) {` | Conditional branch: executes block only when condition is true. |
| 424 | `                this.openDetail(this.selectedPlanSummary);` | Core implementation line contributing to the file behavior. |
| 425 | `              }` | Closes the current code/style block scope. |
| 426 | `            },` | Core implementation line contributing to the file behavior. |
| 427 | `            error: () => {` | Arrow function definition, often used for callbacks. |
| 428 | `              this.assigning = false;` | Core implementation line contributing to the file behavior. |
| 429 | `              this.errorMessage = 'Assignments saved but could not archive this plan.';` | Core implementation line contributing to the file behavior. |
| 430 | `              this.loadDietPlans();` | Core implementation line contributing to the file behavior. |
| 431 | `            },` | Core implementation line contributing to the file behavior. |
| 432 | `          });` | Core implementation line contributing to the file behavior. |
| 433 | `        },` | Core implementation line contributing to the file behavior. |
| 434 | `        error: () => {` | Arrow function definition, often used for callbacks. |
| 435 | `          this.assigning = false;` | Core implementation line contributing to the file behavior. |
| 436 | `          this.errorMessage = 'Could not assign diet plan.';` | Core implementation line contributing to the file behavior. |
| 437 | `        },` | Core implementation line contributing to the file behavior. |
| 438 | `      });` | Core implementation line contributing to the file behavior. |
| 439 | `  }` | Closes the current code/style block scope. |
| 440 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.