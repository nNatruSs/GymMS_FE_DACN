import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bi-bullseye',
      title: 'Goal-Oriented',
      desc: 'Personalized goals with progress tracking'
    },
    {
      icon: 'bi-heart',
      title: 'Community First',
      desc: 'Supportive and motivating environment'
    },
    {
      icon: 'bi-lightning',
      title: 'Results Driven',
      desc: 'Expert guidance with proven methods'
    }
  ];

}
