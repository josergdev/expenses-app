import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expenses, NewExpense } from 'src/app/model/expenses';
import { Friends, NewFriend } from '../model/friend';
import { v4 as uuidV4 } from 'uuid';
import { Balance } from '../model/balance';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private expenses: Expenses = { expenses: [] }
  private expensesSubject = new BehaviorSubject<Expenses>(this.expenses)

  private friends: Friends = { friends: [] }
  private friendsSubject = new BehaviorSubject<Friends>(this.friends)

  private balance: Balance = { balanceItems: [] }
  private balanceSubject = new BehaviorSubject<Balance>(this.balance)

  constructor() {
    this.friendsSubject
      .subscribe(friends => {
        this.balance = {
          balanceItems: friends.friends.map(friend => ({ name: friend.name, amount: "0" }))
        }
        this.balanceSubject.next(this.balance)
      })
  }

  getExpenses(): Observable<Expenses> {
    return this.expensesSubject.asObservable()
  }

  addExpense(newExpense: NewExpense) {
    this.expenses = {
      expenses: this.expenses.expenses.concat({ ...newExpense, payDate: new Date() })
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

  getBalance(): Observable<Balance> {
    return this.balanceSubject.asObservable()
  }
}
