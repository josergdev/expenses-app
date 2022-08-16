import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    this.apiService.getExpenses().subscribe(
      expenses => this.expensesSubject.next(expenses)
    );
  }

  getFriends(): Observable<Friends> {
    this.apiService.getFriends().subscribe(
      friends => this.friendsSubject.next(friends)
    );

    return this.friendsSubject.asObservable()
  }

  addFriend(friend: NewFriend): void {
    this.apiService.addFriend(friend).subscribe(
      _ => this.updateFriendsState()
    )
  }

  private updateFriendsState() {
    this.apiService.getFriends().subscribe(
      friends => this.friendsSubject.next(friends)
    );
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
