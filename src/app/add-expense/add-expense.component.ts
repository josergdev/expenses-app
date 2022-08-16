import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Expenses, NewExpense } from '../model/expenses';
import { Friends } from '../model/friend';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  newExpense: NewExpense = { payerId: "", amount: "", description: "" }
  friends: Friends = { friends: [] }
  expenses: Expenses = { expenses: [] }

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getFriends()
      .subscribe(friends => {
        this.friends = friends
        if (this.friends.friends.length !== 0) {
          this.newExpense.payerId = this.friends.friends[0].id
        }
      })
    this.stateService.getExpenses()
      .subscribe(expenses => this.expenses = expenses)
  }

  onSubmit(expenseForm: NgForm) {
    this.stateService.addExpense({ ...this.newExpense })
  }
}
