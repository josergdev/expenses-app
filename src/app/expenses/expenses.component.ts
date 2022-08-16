import { Component, Input } from '@angular/core';
import { Expenses } from '../model/expenses';
import { Friends } from '../model/friend';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  @Input() friends: Friends = { friends: [] };
  @Input() expenses: Expenses = { expenses: [] };

  friendName(friendId: string) {
    return this.friends.friends.filter(friend => friend.id == friendId)[0].name
  }

  amountFromDecimal(amount: string) {
    return parseInt(amount) / 100
  }
}
