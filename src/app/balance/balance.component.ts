import { Component, Input, OnInit } from '@angular/core';
import { Balance } from '../model/balance';
import { Friends } from '../model/friend';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  @Input() balance!: Balance;
  @Input() friends!: Friends;

  friendName(friendId: string) {
    return this.friends.friends.filter(friend => friend.id == friendId)[0].name
  }

  amountFromDecimal(amount: string) {
    return parseInt(amount) / 100
  }
}
