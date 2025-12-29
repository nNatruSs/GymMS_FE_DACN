import { Component } from '@angular/core';
import { FeaturesComponent } from './features/features.component';
import { ProgramsComponent } from './programs/programs.component';
import { WellnessComponent } from './wellness/wellness.component';
import { StatsComponent } from './stats/stats.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesComponent, ProgramsComponent, WellnessComponent, StatsComponent, CtaComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    {
      image: 'assets/banner1.jpg',
      subtitle: 'Premium Facilities',
      title: 'Experience luxury fitness at its finest'
    },
    {
      image: 'assets/banner2.jpg',
      subtitle: 'Expert Trainers',
      title: 'Train with professionals who care'
    },
    {
      image: 'assets/banner3.jpg',
      subtitle: 'Modern Equipment',
      title: 'Push your limits with the best tools'
    }
  ];
}
