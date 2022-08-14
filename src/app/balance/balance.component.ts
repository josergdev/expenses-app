import { Component, OnInit } from '@angular/core';
import { Balance } from '../model/balance';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: Balance = { balanceItems: [] }

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getBalance()
      .subscribe(balance => this.balance = balance)
  }

}
