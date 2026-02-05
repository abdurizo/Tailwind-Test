import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectFirstComponent } from './project-first/project-first.component';
import { ProjectSecondComponent } from './project-second/project-second.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProfileComponent,
    ExperienceComponent,
    ProjectFirstComponent,
    ProjectSecondComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
