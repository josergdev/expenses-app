import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { Expenses, NewExpense } from 'src/app/model/expenses';
import { Friends, NewFriend } from '../model/friend';
import { Balance } from '../model/balance';
import { ApiService } from './api.service';

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

  constructor(private apiService: ApiService) { }

  getExpenses(): Observable<Expenses> {
    this.updateExpensesState();

    return this.expensesSubject.asObservable()
  }

  addExpense(newExpense: NewExpense) {
    this.apiService.addExpense(newExpense).subscribe(
      _ => this.updateExpensesState()
    )
  }

  private updateExpensesState() {
    this.apiService.getExpenses().subscribe(expenses => {
      if (typeof expenses.expenses === 'undefined') {
        this.expensesSubject.next({ expenses: [] })
      } else {
        this.expensesSubject.next(expenses)
      }
    })
  }

  getFriends(): Observable<Friends> {
    this.updateFriendsState()

    return this.friendsSubject.asObservable()
  }

  addFriend(friend: NewFriend): void {
    this.apiService.addFriend(friend).subscribe(
      _ => this.updateFriendsState()
    )
  }

  private updateFriendsState() {
    this.apiService.getFriends().subscribe(friends => {
      if (typeof friends.friends === 'undefined') {
        this.friendsSubject.next({ friends: [] })
      } else {
        this.friendsSubject.next(friends)
      }
    });
  }

  getBalance(): Observable<Balance> {
    this.updateBalanceState()

    return this.balanceSubject.asObservable()
  }

  private updateBalanceState() {
    this.apiService.getBalance().subscribe(
      balance => this.balanceSubject.next(balance)
    )
  }

}
