import { Component, OnInit } from '@angular/core';
import { SUMMARY } from './mock-summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary = SUMMARY;
  displayedColumns: string[] = ['image','name','quantity','price'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
