import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,ProfileComponent,ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
