import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';
@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  programs = [ 
    {
      image: 'assets/program1.jpg',
      title: 'Personal Training',
      desc: 'One-on-one training sessions tailored to your fitness goals.',
      cta: 'Learn More'
    },
    {
      image: 'assets/program2.jpg',
      title: 'Group Classes',
      desc: 'Join our energetic group fitness classes for a fun workout.',
      cta: 'View Schedule'
    },
    {
      image: 'assets/program3.jpg',
      title: 'Nutrition Coaching',
      desc: 'Personalized nutrition plans to complement your fitness routine.',
      cta: 'Get Started'
    },
  ];
}
