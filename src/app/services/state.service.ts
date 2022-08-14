import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense, Expenses, NewExpense } from 'src/app/model/expenses';
import { Friends, NewFriend } from '../model/friend';
import { v4 as uuidV4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private expenses: Expenses = {
    expenses: [
      {
        name: "Francisco Buyo",
        amount: "10000",
        description: "Cena",
        payDate: new Date()
      },
      {
        name: "Alfonso Pérez",
        amount: "1000",
        description: "Taxi",
        payDate: new Date()
      },
      {
        name: "Alfonso Pérez",
        amount: "5340",
        description: "Cena",
        payDate: new Date()
      }
    ]
  }
  private expensesSubject: BehaviorSubject<Expenses> = new BehaviorSubject<Expenses>(this.expenses)

  private friends: Friends = { friends: [] }
  private friendsSubject: BehaviorSubject<Friends> = new BehaviorSubject<Friends>(this.friends)

  constructor() {
  }

  getExpenses(): Observable<Expenses> {
    return this.expensesSubject.asObservable()
  }

  addExpense(newExpense: NewExpense) {
    this.expenses = {
      expenses: this.expenses.expenses.concat({ payDate: new Date(), ...newExpense })
    }
    this.expensesSubject.next(this.expenses)
  }

  getFriends(): Observable<Friends> {
    return this.friendsSubject.asObservable()
  }

  addFriend(friend: NewFriend): void {
    this.friends = {
      friends: this.friends.friends.concat({ id: uuidV4(), ...friend })
    }
    this.friendsSubject.next(this.friends)
  }
}
