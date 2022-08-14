import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Expenses, Expense } from '../model/expenses';

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
