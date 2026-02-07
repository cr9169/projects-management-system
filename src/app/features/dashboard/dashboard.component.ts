import { Component, OnInit, signal, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProject } from '../../types';
import { ManagementServiceService } from '../../services/management-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  recentProjects = signal<IProject[]>([]);
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false);

  constructor(private projectService: ManagementServiceService) {}

  ngOnInit() {
    this.isLoading.set(true);
    this.projectService
      .getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (projects) => {
          this.recentProjects.set(projects);
          this.errorMessage.set('');
          this.isLoading.set(false);
        },
        error: (error) => {
          this.errorMessage.set(error.message || 'Failed to load projects');
          this.isLoading.set(false);
        },
      });
  }
}
