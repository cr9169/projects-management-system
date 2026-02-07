import { Component, signal, DestroyRef, inject, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { IProject } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ManagementServiceService } from '../../services/management-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private projectService = inject(ManagementServiceService);

  project = signal<IProject | undefined>(undefined);

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) =>
          this.projectService.getProjectById(+params['id']),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((data) => {
        this.project.set(data);
      });
  }
}
