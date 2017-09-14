import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService, StyleObj, Position } from './interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.html',
  styleUrls: ['./interests.css'],
  providers: [InterestsService]
})

//////////
///         Need heavy refactoring
//////

export class InterestsComponent implements OnInit, OnDestroy {

    customHeight = 50;
    customWidth = 50;
    customDimensions = { 'height': this.customHeight + 'px', 'width': this.customWidth + 'px' };
    position: Position = new Position();
    intervalId: any;
    data: StyleObj = new StyleObj();
    staticPosition: boolean = false;
    skills = [];

    //Icon positions
    angularLogoPosition: Position = new Position();
    githubLogoPosition: Position = new Position();
    materialLogoPosition: Position = new Position();
    htmlLogoPosition: Position = new Position();
    cssPosition: Position = new Position();
    javaScriptPosition: Position = new Position();
    jqueryPosition: Position = new Position();
    bootstrapPosition: Position = new Position();
    cSharpLogoPosition: Position = new Position();
    javaLogoPosition: Position = new Position();
    mysqlLogoPosition: Position = new Position();
    postgresqlLogoPosition: Position = new Position();
    sqlalchemyLogoPosition: Position = new Position();
    dxLogoPosition: Position = new Position();
    pythonPosition: Position = new Position();
    typescriptPosition: Position = new Position();

    logoPositionCollection: Position[] = [
        this.htmlLogoPosition,
        this.cssPosition,
        this.javaScriptPosition,
        this.typescriptPosition,
        this.jqueryPosition,
        this.angularLogoPosition,
        this.bootstrapPosition,
        this.materialLogoPosition,
        this.githubLogoPosition,
        this.pythonPosition,
        this.cSharpLogoPosition,
        this.javaLogoPosition,
        this.mysqlLogoPosition,
        this.postgresqlLogoPosition,
        this.sqlalchemyLogoPosition,
        this.dxLogoPosition
    ];

    constructor(private route: ActivatedRoute, private _interestsService: InterestsService) {
        this.skills.push(
                    {
                      "name": "HTML 5",
                      "icon": "assets/HTML5_Logo_512.png"
                    },
                    {
                      "name": "CSS 3",
                      "icon": "assets/css3.png"
                    },
                    {
                      "name": "JavaScript",
                      "icon": "assets/javascript.png"
                    },
                    {
                      "name": "TypeScript",
                      "icon": "assets/typescript.png"
                    },
                    {
                      "name": "jQuery",
                      "icon": "assets/jquery.png"
                    },
                    {
                      "name": "AngularJS / Angular",
                      "icon": "assets/angular-logo.svg"
                    },
                    {
                      "name": "Bootstrap",
                      "icon": "assets/bootstrap.png"
                    },
                    {
                      "name": "Angular Material",
                      "icon": "assets/angularmaterial.png"
                    },
                    {
                      "name": "C#",
                      "icon": "assets/c-sharp.png"
                    },
                    {
                      "name": "Java",
                      "icon": "assets/java.png"
                    },
                    {
                      "name": "Python",
                      "icon": "assets/python.png"
                    },
                    {
                      "name": "MySQL",
                      "icon": "assets/mysql.png"
                    },
                    {
                      "name": "PostgreSQL",
                      "icon": "assets/postgresql.png"
                    },
                    {
                      "name": "SQL Alchemy",
                      "icon": "assets/sqlalchemy.png"
                    },
                    {
                      "name": "DevExpress",
                      "icon": "assets/dx.jpg"
                    },
                    {
                      "name": "Github",
                      "icon": "assets/github-icon.svg"
                    }
                  );
    }   
    ngOnInit(): void {
        this.staticPosition = false;
        this.data.height = this.route.snapshot.params.height;
        this.data.width = this.route.snapshot.params.width;
        let intervalNumber: number = 0;
        this.intervalId = setInterval(() => {
            intervalNumber++;
            if (intervalNumber < 6) {
                this.logoPositionCollection = this._interestsService.getRandomStyles(this.logoPositionCollection, this.data.height, this.data.width);                
            } else {
                this.staticPosition = true;
                clearInterval(this.intervalId);
            }
        }, 1000);
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
}
