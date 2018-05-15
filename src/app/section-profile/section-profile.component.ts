
import { ResumeService } from '../service/resume.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Profile } from '../model/profile.model';


@Component({
  selector: 'app-section-profile',
  templateUrl: './section-profile.component.html',
  styleUrls: ['./section-profile.component.css']
})
export class SectionProfileComponent implements OnInit {


  model = new Profile('Ram', 'Gaddam', 'ram@nisum.com', '9963782963');

  constructor(private resumeService: ResumeService) { }


  disabled = false;
  editAppear = false;
  addAppear=true;

  ngOnInit() { }

  onProfileAdd() {
    this.resumeService.setProfile(this.model.firstName, this.model.lastName, this.model.email, this.model.phone_no);
    this.disabled = true;
    this.editAppear = true;
    this.addAppear=false;
  }
  onProfileEdit() {
    this.disabled = false;
    this.editAppear = false;
    this.addAppear=true;
  }

}
