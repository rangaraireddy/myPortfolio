import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService, StyleObj, Position } from './interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.html',
  styleUrls: ['./interests.css'],
  providers: [InterestsService]
})
export class InterestsComponent implements OnInit, OnDestroy {

    customHeight = 50;
    customWidth = 50;
    customDimensions = { 'height': this.customHeight + 'px', 'width': this.customWidth + 'px' };
    position: Position = new Position();
    intervalId: any;
    data: StyleObj = new StyleObj();

    //Icon positions
    angularLogoPosition: Position = new Position();
    githubLogoPosition: Position = new Position();
    materialLogoPosition: Position = new Position();
    htmlLogoPosition: Position = new Position();

    logoPositionCollection: Position[] = [
        this.angularLogoPosition,
        this.githubLogoPosition,
        this.materialLogoPosition,
        this.htmlLogoPosition
    ];

    constructor(private route: ActivatedRoute, private _interestsService: InterestsService) {}
    // ngOnInit(): void {
    //     this.position.top = '0';
    //     this.position.left = '0';
    //     this.data.height = this.route.snapshot.params.height;
    //     this.data.width = this.route.snapshot.params.width;
    //     this.intervalId = setInterval(() => {
    //         this.position.top = Math.abs(((Math.random() * this.data.height) - 50)) + 'px';
    //         this.position.left = Math.abs(((Math.random() * this.data.width) - 50)) + 'px';
    //     }, 1000);
    // }
    ngOnInit(): void {
        this.data.height = this.route.snapshot.params.height;
        this.data.width = this.route.snapshot.params.width;
        this.intervalId = setInterval(() => {
            this.logoPositionCollection = this._interestsService.getRandomStyles(this.logoPositionCollection, this.data.height, this.data.width);
        }, 1000);
        console.log(this.logoPositionCollection);




        // this.position.top = '0';
        // this.position.left = '0';
        // this.data.height = this.route.snapshot.params.height;
        // this.data.width = this.route.snapshot.params.width;
        // this.intervalId = setInterval(() => {
        //     this.position.top = Math.abs(((Math.random() * this.data.height) - 50)) + 'px';
        //     this.position.left = Math.abs(((Math.random() * this.data.width) - 50)) + 'px';
        // }, 1000);
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}
