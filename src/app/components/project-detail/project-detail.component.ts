import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, switchMap } from 'rxjs';
import { IProject } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ManagementServiceService } from '../../services/management-service.service';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  project$: Observable<IProject | undefined>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ManagementServiceService
  ) {
    // מאחדים נתיב לנתונים בעזרת switchMap
    this.project$ = this.route.params.pipe(
      switchMap((params) => this.projectService.getProjectById(+params['id']))
    );
  }
}
