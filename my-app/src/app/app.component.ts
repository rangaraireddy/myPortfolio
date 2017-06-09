import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('activeRoute') activeRoute;

  gridHeight: number;
  gridWidth: number;
  constructor() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.gridHeight = this.activeRoute.nativeElement.offsetHeight - 50;
      this.gridWidth = this.activeRoute.nativeElement.offsetWidth - 50;
    });
  }
}
