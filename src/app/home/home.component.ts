import { Component, OnInit } from '@angular/core';
import { Balance } from '../model/balance';
import { Expenses } from '../model/expenses';
import { Friends } from '../model/friend';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  expenses!: Expenses
  friends!: Friends
  balance!: Balance;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getExpenses()
      .subscribe(expenses => this.expenses = expenses)
    this.stateService.getFriends()
      .subscribe(friends => this.friends = friends)
    this.stateService.getBalance()
      .subscribe(balance => this.balance = balance)
  }

}
