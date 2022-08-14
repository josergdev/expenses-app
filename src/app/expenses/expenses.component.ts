import { Component, OnInit } from '@angular/core';
import { Expenses, Expense } from '../model/expenses';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expenses = { expenses: [] };

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getExpenses()
      .subscribe(expenses => this.expenses = expenses)
  }

}
