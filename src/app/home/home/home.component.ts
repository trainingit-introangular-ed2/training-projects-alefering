import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public nProjects: number;

  constructor() { }

  ngOnInit() {
    this.nProjects = environment.projects.length;
  }

}
