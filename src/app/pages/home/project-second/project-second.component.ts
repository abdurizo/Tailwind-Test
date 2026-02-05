import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';

@Component({
  selector: 'app-project-second',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-second.component.html',
  styleUrl: './project-second.component.css'
})
export class ProjectSecondComponent {

}
