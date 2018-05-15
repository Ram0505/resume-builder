import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ResumeService } from './../service/resume.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms/src/directives/ng_model';
@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.css']
})
export class SectionEducationComponent implements OnInit {
  eduItems: string[] = [];
  eduDetails: string;
  flag: boolean = false;
  updateAppear=false;
  Addappear=true;
  modifiedIndex: number;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {}

  onAddEducation(eduItem: string) {
    this.eduItems.push(eduItem);
    this.resumeService.setEducation(this.eduItems);
    this.flag = false;
  }

  focusFunction() {
    this.flag = true;
  }
  enterFunction()
  {
    this.flag=false;
  }

  deleteEdutionDetails(i: number) {
    this.eduItems.splice(i, 1);
  }

  editEdutionDetails(item: string,index: number) {
    this.updateAppear=true;
    this.Addappear=false;
    this.eduDetails = item;
    this.modifiedIndex = index;
  }
  onUpdate(eduItem: string)
  {
    this.eduItems[this.modifiedIndex] = eduItem;
    this.Addappear=true;
    this.updateAppear=false;
  }

}
