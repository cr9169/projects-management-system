import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ManagementServiceService } from '../../services/management-service.service';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project?: IProject;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private projectService: ManagementServiceService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.projectService.getProjectById(id).subscribe((proj) => {
        this.project = proj;
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
