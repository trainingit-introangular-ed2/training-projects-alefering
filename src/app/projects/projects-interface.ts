import { Project } from './projects/models/project.model';

export interface ProjectsInterface {
  getListProjects(): Project[];

  deleteProject(id: number);

  filterProjects(name: string): Project[];

  findProject(id: number): Project;

  saveProject(project: Project);
}
