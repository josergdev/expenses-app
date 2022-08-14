import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: 'expenses', component: HomeComponent },
  { path: 'add-friend', component: AddFriendComponent },
  { path: 'add-expense', component: AddExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
