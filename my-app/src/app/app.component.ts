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
      this.gridHeight = this.activeRoute._element.nativeElement.offsetHeight;
      this.gridWidth = this.activeRoute._element.nativeElement.offsetWidth;
    });
  }
}
