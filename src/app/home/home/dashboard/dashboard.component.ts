import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  @Input() public numProjects: number;

  constructor() { }

  ngOnInit() {
    this.numProjects = environment.projects.length;
  }

}
