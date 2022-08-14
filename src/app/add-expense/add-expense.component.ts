import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  friends: Friends = { friends: [] };
  expenses: Observable<Expenses> | undefined;

  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit(): void {
    this.stateService.getFriends().subscribe(friends => this.friends = friends)
    if (this.friends.friends.length !== 0) this.newExpense.payerId = this.friends.friends[0].id
    this.expenses = this.stateService.getExpenses()
  }

  onSubmit(expenseForm: NgForm) {
    this.stateService.addExpense({ ...this.newExpense })
  }
}
