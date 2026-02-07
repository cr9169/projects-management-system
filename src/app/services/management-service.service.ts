import { Injectable } from '@angular/core';
import { of, throwError, delay } from 'rxjs';
import { IProject } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ManagementServiceService {
  projects: IProject[] = [
    {
      id: 1,
      name: 'New Website Development',
      description: 'Building a new corporate website including CMS',
      status: 'in_progress',
      dateUpdated: new Date('2025-02-01'),
    },
    {
      id: 2,
      name: 'CRM System Upgrade',
      description: 'Updating and expanding existing customer management system',
      status: 'not_started',
      dateUpdated: new Date('2025-02-03'),
    },
    {
      id: 3,
      name: 'Mobile Application',
      description: 'Developing application for Android and iOS',
      status: 'completed',
      dateUpdated: new Date('2025-01-15'),
    },
    {
      id: 4,
      name: 'API Integration',
      description:
        'Connecting to third-party systems and implementing interfaces',
      status: 'in_progress',
      dateUpdated: new Date('2025-02-05'),
    },
    {
      id: 5,
      name: 'BI System',
      description: 'Setting up business intelligence and data analysis system',
      status: 'on_hold',
      dateUpdated: new Date('2025-01-20'),
    },
    {
      id: 6,
      name: 'Information Security',
      description:
        'Upgrading security systems and implementing protection solutions',
      status: 'in_progress',
      dateUpdated: new Date('2025-02-06'),
    },
    {
      id: 7,
      name: 'Backup System',
      description: 'Implementing automatic backup and data recovery system',
      status: 'not_started',
      dateUpdated: new Date('2025-02-04'),
    },
    {
      id: 8,
      name: 'Database Optimization',
      description: 'Improving performance and optimizing database',
      status: 'in_progress',
      dateUpdated: new Date('2025-02-07'),
    },
    {
      id: 9,
      name: 'Cloud Infrastructure',
      description: 'Migrating services and systems to cloud infrastructure',
      status: 'completed',
      dateUpdated: new Date('2025-01-25'),
    },
    {
      id: 10,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 11,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 12,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 13,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 14,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 15,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 16,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 17,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
    {
      id: 18,
      name: 'Team Training',
      description: 'Series of professional training for development team',
      status: 'not_started',
      dateUpdated: new Date('2025-02-02'),
    },
  ];

  constructor() {}

  getProjects() {
    return of(this.projects).pipe(delay(100));
  }

  getProjectById(id: number) {
    return of(this.projects.find((project) => project.id === id));
  }

  addProject(newProject: IProject) {
    this.projects.push(newProject);
    return of(this.projects);
  }
}
