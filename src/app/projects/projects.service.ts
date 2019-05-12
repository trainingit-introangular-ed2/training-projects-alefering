import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsInterface } from './projects-interface';
import { Project } from './projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements ProjectsInterface {
  constructor(private httpClient: HttpClient) {}

  getListProjects() {
    console.log('ProjectsService - getListProjects - BEGIN: ');
    let lstProjects: Project[] = null;
    this.httpClient.get(environment.urlAPI).subscribe(
      (response: Project[]) => {
        lstProjects = response;
      },
      error => {
        console.log('Error en peticion HTTP: ' + error);
      }
    );
    return lstProjects;
  }

  deleteProject(id: number) {
    console.log('ProjectsService - deleteProject - BEGIN: project = ' + id);
    environment.projects = environment.projects.filter(p => p.id !== id);
  }

  filterProjects(name: string) {
    console.log('ProjectsService - filterProjects - BEGIN: name = ' + name);
    if (name.trim() === '') {
      return environment.projects;
    } else {
      return environment.projects.filter(p => p.name.includes(name));
    }
  }

  findProject(id: number) {
    console.log('ProjectsService - findProject - BEGIN: id = ' + id);
    return environment.projects.find(p => p.id === id);
  }

  saveProject(project: Project) {
    console.log('ProjectsService - saveProject - BEGIN: project = ' + JSON.stringify(project));
    this.httpClient.post(environment.urlAPI, project).subscribe(
      response => {
        console.log('Peticion correcta HTTP: ' + JSON.stringify(response));
      },
      error => {
        console.log('Error en peticion HTTP');
      }
    );
    environment.projects.push({ ...project });
  }
}
