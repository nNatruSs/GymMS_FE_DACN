import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  services = [
    {
      icon: 'bi-person',
      title: 'Personal Training',
      description: 'Work one-on-one with certified personal trainers.',
      features: [
        'Personalized sessions',
        'Custom workout plans',
        'Progress tracking',
        'Nutritional guidance'
      ],
      cta: 'Book a Session',
      image: 'assets/our-services1.jpg'
    },
    {
      icon: 'bi-people',
      title: 'Group Fitness Classes',
      description: 'High-energy classes led by expert instructors.',
      features: [
        'HIIT & Cardio',
        'Yoga & Pilates',
        'Strength training',
        'Flexible schedules'
      ],
      cta: 'View Schedule',
      image: 'assets/our-services2.jpg'
    },
    {
      icon: 'bi-heart',
      title: 'Wellness & Recovery',
      description: 'Holistic services to support recovery and wellbeing.',
      features: [
        'Sports massage',
        'Nutrition counseling',
        'Recovery programs',
        'Wellness assessments'
      ],
      cta: 'Learn More',
      image: 'assets/our-services3.jpg'
    }
  ];

  plans = [
    {
      name: 'Basic',
      price: '$49 / month',
      features: ['Gym access', 'Locker room'],
      featured: false
    },
    {
      name: 'Standard',
      price: '$79 / month',
      features: ['All basic features', 'Group classes', 'Nutrition guide'],
      featured: true
    },
    {
      name: 'Premium',
      price: '$129 / month',
      features: ['Unlimited classes', 'Personal training'],
      featured: false
    }
  ];
}
