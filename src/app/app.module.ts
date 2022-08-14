import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    AddFriendComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
