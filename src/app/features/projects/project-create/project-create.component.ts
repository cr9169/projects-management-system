import { Component, signal, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ManagementServiceService } from '../../../services/management-service.service';
import { IProject } from '../../../types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormInputComponent } from '../../../shared/components/form-input/form-input.component';
import { FormTextareaComponent } from '../../../shared/components/form-textarea/form-textarea.component';
import { FormSelectComponent } from '../../../shared/components/form-select/form-select.component';

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormInputComponent,
    FormTextareaComponent,
    FormSelectComponent,
  ],
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

  statusOptions = [
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'on_hold', label: 'On Hold' },
  ];

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
