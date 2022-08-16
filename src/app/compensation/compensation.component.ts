import { Component, OnInit } from '@angular/core';
import { Compensation } from '../model/compensation';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css']
})
export class CompensationComponent implements OnInit {

  compensation: Compensation = {
    compensationItems: [
      {
        debtorId: "Jose",
        creditorId: "Francisco",
        amount: "1000"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
