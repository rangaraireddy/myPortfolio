import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contactMe.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/house',
    pathMatch: 'full'
  },
  {
    path: 'house',
    component: SummaryComponent
  },
  {
    path: 'stark',
    component: ExperienceComponent
  },
  {
    path: 'lannister',
    component: ContactComponent
  },
  {
    path: 'targeryn',
    component: EducationComponent
  },
  {
    path: 'baratheon/:height/:width',
    component: InterestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [];
