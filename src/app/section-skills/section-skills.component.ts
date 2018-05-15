import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent implements OnInit {

  items = ['Pizza', 'Pasta', 'Parmesan'];

  // autocompleteItems = ['Item1', 'item2', 'item3'];

  constructor() { }

  ngOnInit() {
  }

}
