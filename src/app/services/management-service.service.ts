import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IProject } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ManagementServiceService {
  projects: IProject[] = [
    {
      id: 1,
      name: 'פיתוח אתר אינטרנט חדש',
      description: 'בניית אתר תדמית חדש לחברה כולל מערכת ניהול תוכן',
      status: 'בתהליך',
      dateUpdated: new Date('2025-02-01'),
    },
    {
      id: 2,
      name: 'שדרוג מערכת CRM',
      description: 'עדכון והרחבת מערכת ניהול לקוחות קיימת',
      status: 'טרם התחיל',
      dateUpdated: new Date('2025-02-03'),
    },
    {
      id: 3,
      name: 'אפליקציית מובייל',
      description: 'פיתוח אפליקציה לאנדרואיד ו-iOS',
      status: 'הושלם',
      dateUpdated: new Date('2025-01-15'),
    },
    {
      id: 4,
      name: 'אינטגרציית API',
      description: 'חיבור למערכות צד שלישי והטמעת ממשקים',
      status: 'בתהליך',
      dateUpdated: new Date('2025-02-05'),
    },
    {
      id: 5,
      name: 'מערכת BI',
      description: 'הקמת מערכת בינה עסקית וניתוח נתונים',
      status: 'מוקפא',
      dateUpdated: new Date('2025-01-20'),
    },
    {
      id: 6,
      name: 'אבטחת מידע',
      description: 'שדרוג מערכות אבטחה ויישום פתרונות הגנה',
      status: 'בתהליך',
      dateUpdated: new Date('2025-02-06'),
    },
    {
      id: 7,
      name: 'מערכת גיבויים',
      description: 'הטמעת מערכת גיבוי אוטומטית ושחזור נתונים',
      status: 'טרם התחיל',
      dateUpdated: new Date('2025-02-04'),
    },
    {
      id: 8,
      name: 'אופטימיזציית מסד נתונים',
      description: 'שיפור ביצועים ואופטימיזציה של מסד הנתונים',
      status: 'בתהליך',
      dateUpdated: new Date('2025-02-07'),
    },
    {
      id: 9,
      name: 'תשתיות ענן',
      description: 'העברת שירותים ומערכות לתשתיות ענן',
      status: 'הושלם',
      dateUpdated: new Date('2025-01-25'),
    },
    {
      id: 10,
      name: 'הדרכות צוות',
      description: 'סדרת הדרכות מקצועיות לצוות הפיתוח',
      status: 'טרם התחיל',
      dateUpdated: new Date('2025-02-02'),
    },
  ];

  constructor() {}

  getProjects() {
    return of(this.projects);
  }

  getProjectById(id: number) {
    return of(this.projects.find((project) => project.id === id));
  }

  addProject() {
    const newProject: IProject = {
      id: 11,
      name: 'פרויקט חדש',
      description: 'תיאור',
      status: 'טרם התחיל',
      dateUpdated: new Date(),
    };

    this.projects.push(newProject);
    return of(this.projects);
  }
}
