import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementServiceService } from '../../services/management-service.service';
import { IProject } from '../../types';

@Component({
  selector: 'app-project-create',
  standalone: false,
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss',
})
export class ProjectCreateComponent {
  projectName: string = '';
  projectDescription: string = '';
  projectStatus: string = 'in-progress';

  constructor(
    private projectService: ManagementServiceService,
    private router: Router
  ) {}

  createProject() {
    const newProject: IProject = {
      id: 0,
      name: this.projectName,
      description: this.projectDescription,
      status: this.projectStatus,
      dateUpdated: new Date(),
    };

    this.projectService.addProject(newProject).subscribe((proj) => {
      console.log('Project created:', proj);
      this.router.navigate(['/projects']);
    });
  }
}
