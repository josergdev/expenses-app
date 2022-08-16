import { Component, Input, OnInit } from '@angular/core';
import { Compensation } from '../model/compensation';
import { Friends } from '../model/friend';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css']
})
export class CompensationComponent {
  @Input() friends: Friends = { friends: [] }
  @Input() compensation: Compensation = { compensationItems: [] }

  friendName(friendId: string) {
    return this.friends.friends.filter(friend => friend.id == friendId)[0].name
  }

  amountFromDecimal(amount: string) {
    return parseInt(amount) / 100
  }
}
