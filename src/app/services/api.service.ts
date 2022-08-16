import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Balance } from '../model/balance';
import { Compensation } from '../model/compensation';
import { Expense, Expenses, NewExpense } from '../model/expenses';
import { Friend, Friends, NewFriend } from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private expensesUrl = 'http://host.docker.internal:8080'

  constructor(private http: HttpClient) { }

  getExpenses(): Observable<Expenses> {
    return this.http.get<Expenses>(`${this.expensesUrl}/expenses`).pipe(
      tap(expenses => console.log('fetched', expenses)),
      catchError((error: any) => {
        console.error(error)
        return of({ expenses: [] })
      })
    )
  }

  addExpense(newExpense: NewExpense): Observable<Expense | null> {
    return this.http.post<Expense | null>(`${this.expensesUrl}/expenses`, newExpense).pipe(
      tap(expense => console.log('fetched', expense)),
      catchError((error: any) => {
        console.error(error)
        return of(null)
      })
    )
  }

  getFriends(): Observable<Friends> {
    return this.http.get<Friends>(`${this.expensesUrl}/friends`).pipe(
      tap(friends => console.log('fetched', friends)),
      catchError((error: any) => {
        console.error(error)
        return of({ friends: [] })
      })
    )
  }

  addFriend(newFriend: NewFriend): Observable<Friend | null> {
    return this.http.post<Friend | null>(`${this.expensesUrl}/friends`, newFriend).pipe(
      tap(friend => console.log('fetched', friend)),
      catchError((error: any) => {
        console.error(error)
        return of(null)
      })
    )
  }

  getBalance(): Observable<Balance> {
    return this.http.get<Balance>(`${this.expensesUrl}/balance`).pipe(
      tap(balance => console.log('fetched', balance)),
      catchError((error: any) => {
        console.error(error)
        return of({ balanceItems: [] })
      })
    )
  }

  getCompensation() {
    return this.http.get<Compensation>(`${this.expensesUrl}/compensation`).pipe(
      tap(compensation => console.log('fetched', compensation)),
      catchError((error: any) => {
        console.error(error)
        return of({ compensationItems: [] })
      })
    )
  }

}
