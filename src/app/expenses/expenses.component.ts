import { Component, Input } from '@angular/core';
import * as moment from 'moment';
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
    var filteredFriends = this.friends.friends.filter(friend => friend.id == friendId)
    if (filteredFriends.length === 0) {
      return '...'
    }
    return filteredFriends[0].name
  }

  amountFromDecimal(amount: string) {
    return parseInt(amount) / 100
  }

  ago(date: string) {
    return moment(date).locale('es').fromNow()
  }
}
