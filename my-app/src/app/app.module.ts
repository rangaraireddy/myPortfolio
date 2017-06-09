import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-router.module';
import { MyMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contactMe.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MyMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SummaryComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    InterestsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
