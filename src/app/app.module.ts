import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- ייבוא חשוב!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ManagementServiceService } from './services/management-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // <-- חובה כדי לתמוך ב־@defer או אנימציות אחרות
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [ManagementServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
