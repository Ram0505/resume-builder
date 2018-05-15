import { ResumeService } from './../service/resume.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { ProfileExperience } from '../model/profileExperience';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-section-professional-experience',
  templateUrl: './section-professional-experience.component.html',
  styleUrls: ['./section-professional-experience.component.css']
})

export class SectionProfessionalExperienceComponent implements OnInit {


  model = new ProfileExperience('', '', '', '', '', '', '');
  // responsibilityItems: string[] = [];
  // responsibilityDetails: string;
  submitted = false;
  constructor(
  //  private http: Http,
    private resumeService: ResumeService) { }

  // getProfExperience = function () {
  //   this.http.get("http://localhost:5555/profExperiences").subscribe(
  //     (res: Response) => {
  //       this.prof=res.json();  
  //     }
  //   )

  // }

  ngOnInit() {
    //   this.http.get('/src/professionalExperience').subscribe(data => {
    //     this.profExperiences = data['profExperiences'];
    //   });
  }

  onSubmit() {
    this.submitted = true;
  }
  onAddProfessionalExperience() {

  }
  onEditClick() {
    this.submitted = false;
  }
  // onAddResponsibility(responsibilityItem: string) {
  //   this.responsibilityItems.push(responsibilityItem);
  //   this.resumeService.setResponsibility(this.responsibilityItems);
  // }
  // deleteResponsibility(i: number) {
  //   this.responsibilityItems.splice(i, 1);
  // }

  // editResponsibilityDetails(item: string) {
  //   this.responsibilityDetails = item;
  // }
  // editSplice(i: number) {
  //   this.responsibilityItems.splice(i, 1);
  // }
}
