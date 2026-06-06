import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';  
import { StorageService } from './auth/services/storage/storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule, NavComponent, FooterComponent, ConfirmDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private router: Router, private storage: StorageService){}

  title = 'GymMS';

  

  

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event.constructor.name == "NavigationEnd"){
        
        
        
      }
    })
  }

  logout(){
    this.storage.signOut();
    this.router.navigateByUrl("/login");
  }

 
}
