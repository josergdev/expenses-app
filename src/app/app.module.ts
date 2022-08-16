import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompensationComponent } from './compensation/compensation.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    AddFriendComponent,
    AddExpenseComponent,
    BalanceComponent,
    HomeComponent,
    CompensationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
