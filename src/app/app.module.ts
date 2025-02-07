import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ManagementServiceService } from './services/management-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleCasePipe } from './pipes/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCreateComponent,
    NavbarComponent,
    TitleCasePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ManagementServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
