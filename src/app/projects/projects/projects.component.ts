import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../projects.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  public lstProjects: Project[];
  public project: Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.project = { id: null, name: '' };
    //this.lstProjects = this.getListProjects();
    this.lstProjects = environment.projects;
  }

  public getListProjects() {
    console.log('ProjectsComponent - getListProjects - BEGIN: ');
    return this.projectsService.getListProjects();
  }

  public deleteProject(id: number) {
    console.log('ProjectsComponent - deleteProject - BEGIN: id = ' + id);
    this.projectsService.deleteProject(id);
    this.showEnvProjects();
  }

  public filterProjects(name: string) {
    console.log('ProjectsComponent - filterProjects - BEGIN: ' + name);
    this.lstProjects = this.projectsService.filterProjects(name);
  }

  public viewProject(p: Project) {
    console.log('ProjectsComponent - viewProject - BEGIN: id = ' + JSON.stringify(p));
    this.project = p;
  }

  public saveProject(nameProject: string) {
    console.log('ProjectsComponent - saveProject - BEGIN: nameProject = ' + nameProject);
    let maxId = 0;
    if (this.lstProjects.length > 0) {
      maxId = Math.max(
        ...environment.projects.map(function(p) {
          return p.id;
        })
      );
    }

    const p: Project = { id: maxId + 1, name: nameProject };
    this.projectsService.saveProject(p);
    //this.getListProjects();
  }

  public showEnvProjects() {
    console.log('ProjectsComponent - showEnvProjects - BEGIN');
    this.lstProjects = environment.projects;
  }
}
