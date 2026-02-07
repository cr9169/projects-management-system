import { Component, signal, DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementServiceService } from '../../services/management-service.service';
import { IProject } from '../../types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-create',
  standalone: false,
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss',
})
export class ProjectCreateComponent {
  private destroyRef = inject(DestroyRef);
  private projectService = inject(ManagementServiceService);
  private router = inject(Router);

  projectName = signal<string>('');
  projectDescription = signal<string>('');
  projectStatus = signal<string>('in_progress');

  createProject() {
    const name = this.projectName().trim();
    const description = this.projectDescription().trim();
    const status = this.projectStatus().trim();

    if (!name) {
      alert('Project name is required');
      return;
    }
    if (!description) {
      alert('Description is required');
      return;
    }
    if (!status) {
      alert('Status is required');
      return;
    }

    const newProject: IProject = {
      id: 0,
      name: name,
      description: description,
      status: status,
      dateUpdated: new Date(),
    };

    this.projectService
      .addProject(newProject)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((proj) => {
        console.log('Project created:', proj);
        this.router.navigate(['/projects']);
      });
  }
}
