import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrls: ['./education.css',  '../app.component.css']
})
export class EducationComponent {
  educationDetails: Object[] = [];

  constructor() {
    this.addDetails();
  }

  private addDetails(): void {
    let object: Object = new Object();
    this.educationDetails.push(
      {
        'header': 'Master of Science',
        'contextTop': 'University at Buffalo, State University of New York',
        'contextBottom': 'Systems Engineering'
      },
      {
        'header': 'Bachelor of Technology',
        'contextTop': 'Jawaharlal Nehru Technological University',
        'contextBottom': 'Mechanical Engineering'
      },
      {
        'header': 'Certifications',
        'contextTop': 'SAFe (Scaled Agile Framework) 4.0 Practitioner',
        'contextBottom': 'Certificate Id: 98096848-7988'
      }
    );
  }
}
