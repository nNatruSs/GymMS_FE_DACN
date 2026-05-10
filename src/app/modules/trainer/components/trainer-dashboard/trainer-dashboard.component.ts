import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TrainerSidebarComponent } from '../trainer-sidebar/trainer-sidebar.component';

@Component({
  selector: 'app-trainer-dashboard',
  standalone: true,
  imports: [RouterModule, TrainerSidebarComponent],
  templateUrl: './trainer-dashboard.component.html',
  styleUrl: './trainer-dashboard.component.css'
})
export class TrainerDashboardComponent {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {

    this.titleService.setTitle('GymMS - Trainer Dashboard');
  
    this.meta.addTag({ name: 'title', content: 'GymMS - Trainer Dashboard' });

    
    this.meta.addTag({ name: 'description', content: 'Welcome to your dashboard' });
  }
}
