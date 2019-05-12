import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styles: []
})
export class ProjectsListComponent implements OnInit {
  @Input() public projects: Project[];

  @Output() public deleter = new EventEmitter<number>();

  @Output() public viewer = new EventEmitter<Project>();

  constructor() {}

  ngOnInit() {}
}
