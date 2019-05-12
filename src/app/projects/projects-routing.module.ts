import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectFormComponent } from './projects/new-project-form/new-project-form.component';
import { ViewerProjectFormComponent } from './projects/viewer-project-form/viewer-project-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'new',
        component: NewProjectFormComponent
      },
      {
        path: ':id',
        component: ViewerProjectFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
