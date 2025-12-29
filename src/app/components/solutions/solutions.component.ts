import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  solutions = [
    {
      icon: 'bi-bullseye',
      title: 'Goal Tracking',
      description: 'Set and monitor your fitness goals with advanced tracking.'
    },
    {
      icon: 'bi-people',
      title: 'Trainer Connection',
      description: 'Connect with certified trainers for personalized workouts.'
    },
    {
      icon: 'bi-bar-chart',
      title: 'Performance Analytics',
      description: 'Data-driven insights to understand your progress.'
    },
    {
      icon: 'bi-calendar-check',
      title: 'Easy Booking',
      description: 'Book classes and sessions in just a few clicks.'
    },
    {
      icon: 'bi-clock',
      title: '24/7 Access',
      description: 'Access your dashboard anytime, anywhere.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Secure & Private',
      description: 'Enterprise-grade security to protect your data.'
    }
  ];
}
