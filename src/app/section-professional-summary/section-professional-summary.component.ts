import { ResumeService } from './../service/resume.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-professional-summary',
  templateUrl: './section-professional-summary.component.html',
  styleUrls: ['./section-professional-summary.component.css']
})
export class SectionProfessionalSummaryComponent implements OnInit {

  summaryItems: string[] = [];
  summaryDetails: string;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {}

  onAddSummary(summaryItem: string) {
    this.summaryItems.push(summaryItem);
    this.resumeService.setProfessionalSummary(this.summaryItems);
  }

  deleteItem(i: number) {
    this.summaryItems.splice(i, 1);
  }

  summaryEdit(item: string) {
    this.summaryDetails = item;
  }
  editSplice(i: number) {
    this.summaryItems.splice(i, 1);
  }
}
