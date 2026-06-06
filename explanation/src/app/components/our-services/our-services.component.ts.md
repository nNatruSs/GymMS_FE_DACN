# Explanation: `src/app/components/our-services/our-services.component.ts`

## File Overview
- **Relative path:** `src/app/components/our-services/our-services.component.ts`
- **Total lines:** `73`
- **Non-empty lines:** `72`
- **Import statements:** `2`
- **Class-like declarations found:** `1`
- **Function/method-like signatures found (approx):** `0`

## Line-by-Line Behavior
Each row describes what that exact line contributes to behavior or structure.

| Line | Source | Explanation |
|---:|---|---|
| 1 | `import { Component } from '@angular/core';` | Imports a dependency so this file can use external symbols. |
| 2 | `import { CommonModule } from '@angular/common';` | Imports a dependency so this file can use external symbols. |
| 3 | `@Component({` | Angular decorator declaring metadata for this component. |
| 4 | `  selector: 'app-our-services',` | Core implementation line contributing to the file behavior. |
| 5 | `  standalone: true,` | Core implementation line contributing to the file behavior. |
| 6 | `  imports: [CommonModule],` | Core implementation line contributing to the file behavior. |
| 7 | `  templateUrl: './our-services.component.html',` | Core implementation line contributing to the file behavior. |
| 8 | `  styleUrl: './our-services.component.css'` | Core implementation line contributing to the file behavior. |
| 9 | `})` | Core implementation line contributing to the file behavior. |
| 10 | `export class OurServicesComponent {` | Exports symbols so other files can import this logic. |
| 11 | `  services = [` | Core implementation line contributing to the file behavior. |
| 12 | `    {` | Begins a new code/style block scope. |
| 13 | `      icon: 'bi-person',` | Core implementation line contributing to the file behavior. |
| 14 | `      title: 'Personal Training',` | Core implementation line contributing to the file behavior. |
| 15 | `      description: 'Work one-on-one with certified personal trainers.',` | Core implementation line contributing to the file behavior. |
| 16 | `      features: [` | Core implementation line contributing to the file behavior. |
| 17 | `        'Personalized sessions',` | Core implementation line contributing to the file behavior. |
| 18 | `        'Custom workout plans',` | Core implementation line contributing to the file behavior. |
| 19 | `        'Progress tracking',` | Core implementation line contributing to the file behavior. |
| 20 | `        'Nutritional guidance'` | Core implementation line contributing to the file behavior. |
| 21 | `      ],` | Core implementation line contributing to the file behavior. |
| 22 | `      cta: 'Book a Session',` | Core implementation line contributing to the file behavior. |
| 23 | `      image: 'assets/our-services1.jpg'` | Core implementation line contributing to the file behavior. |
| 24 | `    },` | Core implementation line contributing to the file behavior. |
| 25 | `    {` | Begins a new code/style block scope. |
| 26 | `      icon: 'bi-people',` | Core implementation line contributing to the file behavior. |
| 27 | `      title: 'Group Fitness Classes',` | Core implementation line contributing to the file behavior. |
| 28 | `      description: 'High-energy classes led by expert instructors.',` | Core implementation line contributing to the file behavior. |
| 29 | `      features: [` | Core implementation line contributing to the file behavior. |
| 30 | `        'HIIT & Cardio',` | Core implementation line contributing to the file behavior. |
| 31 | `        'Yoga & Pilates',` | Core implementation line contributing to the file behavior. |
| 32 | `        'Strength training',` | Core implementation line contributing to the file behavior. |
| 33 | `        'Flexible schedules'` | Core implementation line contributing to the file behavior. |
| 34 | `      ],` | Core implementation line contributing to the file behavior. |
| 35 | `      cta: 'View Schedule',` | Core implementation line contributing to the file behavior. |
| 36 | `      image: 'assets/our-services2.jpg'` | Core implementation line contributing to the file behavior. |
| 37 | `    },` | Core implementation line contributing to the file behavior. |
| 38 | `    {` | Begins a new code/style block scope. |
| 39 | `      icon: 'bi-heart',` | Core implementation line contributing to the file behavior. |
| 40 | `      title: 'Wellness & Recovery',` | Core implementation line contributing to the file behavior. |
| 41 | `      description: 'Holistic services to support recovery and wellbeing.',` | Core implementation line contributing to the file behavior. |
| 42 | `      features: [` | Core implementation line contributing to the file behavior. |
| 43 | `        'Sports massage',` | Core implementation line contributing to the file behavior. |
| 44 | `        'Nutrition counseling',` | Core implementation line contributing to the file behavior. |
| 45 | `        'Recovery programs',` | Core implementation line contributing to the file behavior. |
| 46 | `        'Wellness assessments'` | Core implementation line contributing to the file behavior. |
| 47 | `      ],` | Core implementation line contributing to the file behavior. |
| 48 | `      cta: 'Learn More',` | Core implementation line contributing to the file behavior. |
| 49 | `      image: 'assets/our-services3.jpg'` | Core implementation line contributing to the file behavior. |
| 50 | `    }` | Closes the current code/style block scope. |
| 51 | `  ];` | Core implementation line contributing to the file behavior. |
| 52 | `` | Blank line used to separate logical blocks for readability. |
| 53 | `  plans = [` | Core implementation line contributing to the file behavior. |
| 54 | `    {` | Begins a new code/style block scope. |
| 55 | `      name: 'Basic',` | Core implementation line contributing to the file behavior. |
| 56 | `      price: '$49 / month',` | Core implementation line contributing to the file behavior. |
| 57 | `      features: ['Gym access', 'Locker room'],` | Core implementation line contributing to the file behavior. |
| 58 | `      featured: false` | Core implementation line contributing to the file behavior. |
| 59 | `    },` | Core implementation line contributing to the file behavior. |
| 60 | `    {` | Begins a new code/style block scope. |
| 61 | `      name: 'Standard',` | Core implementation line contributing to the file behavior. |
| 62 | `      price: '$79 / month',` | Core implementation line contributing to the file behavior. |
| 63 | `      features: ['All basic features', 'Group classes', 'Nutrition guide'],` | Core implementation line contributing to the file behavior. |
| 64 | `      featured: true` | Core implementation line contributing to the file behavior. |
| 65 | `    },` | Core implementation line contributing to the file behavior. |
| 66 | `    {` | Begins a new code/style block scope. |
| 67 | `      name: 'Premium',` | Core implementation line contributing to the file behavior. |
| 68 | `      price: '$129 / month',` | Core implementation line contributing to the file behavior. |
| 69 | `      features: ['Unlimited classes', 'Personal training'],` | Core implementation line contributing to the file behavior. |
| 70 | `      featured: false` | Core implementation line contributing to the file behavior. |
| 71 | `    }` | Closes the current code/style block scope. |
| 72 | `  ];` | Core implementation line contributing to the file behavior. |
| 73 | `}` | Closes the current code/style block scope. |

## Notes
- Explanations are static analysis notes. Runtime behavior can differ based on data flow, APIs, and user actions.