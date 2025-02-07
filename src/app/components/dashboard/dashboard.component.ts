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

  constructor(private projectService: ManagementServiceService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((data) => {
      // לדוגמה, נציג את 3 הפרויקטים האחרונים
      this.recentProjects = data.slice(-3);
    });
  }
}
