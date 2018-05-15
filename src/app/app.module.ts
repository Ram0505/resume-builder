import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionEducationComponent } from './section-education/section-education.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { SectionProfileComponent } from './section-profile/section-profile.component';
import { SectionProfessionalSummaryComponent } from './section-professional-summary/section-professional-summary.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionProfessionalExperienceComponent } from './section-professional-experience/section-professional-experience.component';
import { SectionExperienceComponent } from './section-experience/section-experience.component';
import { SectionResumePreviewComponent } from './section-resume-preview/section-resume-preview.component';
import { ResumeService } from './service/resume.service';
import { ForbiddenValidatorDirective } from './shared/directive/forbidden-name.directive';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import 'hammerjs';

// TagInputModule.withDefaults({
//   tagInput: {
//       placeholder: 'Add new tag'
//   }
// });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionEducationComponent,
    SectionSkillsComponent,
    SectionProfileComponent,
    SectionProfessionalSummaryComponent,
    SectionProfessionalExperienceComponent,
    SectionExperienceComponent,
    SectionResumePreviewComponent,
    ForbiddenValidatorDirective

  ],
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    //RouterModule.forRoot([])
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);