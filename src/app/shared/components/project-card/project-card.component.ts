import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProject } from '../../../types';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: IProject;
}
