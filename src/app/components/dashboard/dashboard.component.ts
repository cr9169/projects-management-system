import { Component, OnInit } from '@angular/core';
import { IProject } from '../../types';
import { ManagementServiceService } from '../../services/management-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  recentProjects: IProject[] = [];
  errorMessage: string = '';

  constructor(private projectService: ManagementServiceService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe({
      next: (data: IProject[]) => {
        if (data) {
          this.recentProjects = data.slice(-14);
        }
      },
      error: (error) => {
        console.error('An error occurred:', error);
        this.errorMessage = 'Failed to load projects. Please try again later.';
      },
    });
  }
}
