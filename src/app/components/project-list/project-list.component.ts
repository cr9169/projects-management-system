import {
  Component,
  OnInit,
  signal,
  computed,
  DestroyRef,
  inject,
} from '@angular/core';
import { IProject } from '../../types';
import { ManagementServiceService } from '../../services/management-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  projects = signal<IProject[]>([]);
  searchText = signal<string>('');
  filteredProjects = computed(() =>
    this.projects().filter((project) =>
      project.name.toLowerCase().includes(this.searchText().toLowerCase()),
    ),
  );

  constructor(private projectService: ManagementServiceService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService
      .getProjects()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.projects.set(data);
      });
  }
}
