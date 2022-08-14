import { Component, OnInit } from '@angular/core';
import { Balance } from './balance';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance: Balance = {
    balanceItems: [
      { name: "Francisco Buyo", amount: "1000" },
      { name: "Alfonso Pérez", amount: "2255" },
      { name: "Raúl González", amount: "-4085" },
      { name: "José María Gutiérrez", amount: "-4085" },

    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
