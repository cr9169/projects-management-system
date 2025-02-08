import { Component, OnInit } from '@angular/core';
import { IProject } from '../../types';
import { ManagementServiceService } from '../../services/management-service.service';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  projects: IProject[] = [];
  filteredProjects: IProject[] = [];
  searchText: string = '';

  constructor(private projectService: ManagementServiceService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
      this.filteredProjects = data;
    });
  }

  onSearchTextChange() {
    this.filteredProjects = this.projects.filter((project) =>
      project.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
