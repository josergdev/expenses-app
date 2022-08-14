import { Component, OnInit } from '@angular/core';
import { Expenses, Expense } from './expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expenses = {
    expenses: [
      {
        name: "Francisco Buyo",
        amount: "10000",
        description: "Cena",
        payDate: new Date()
      },
      {
        name: "Alfonso Pérez",
        amount: "1000",
        description: "Taxi",
        payDate: new Date()
      },
      {
        name: "Alfonso Pérez",
        amount: "5340",
        description: "Cena",
        payDate: new Date()
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
