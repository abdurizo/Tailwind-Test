import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';

@Component({
  selector: 'app-project-first',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-first.component.html',
  styleUrl: './project-first.component.css'
})
export class ProjectFirstComponent {

}
