import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Friends, NewFriend } from '../model/friend';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  friends: Friends = { friends: [] }
  newFriend: NewFriend = { name: "" }

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getFriends()
      .subscribe(friends => this.friends = friends)
  }

  onSubmit(friendForm: NgForm) {
    this.stateService.addFriend({ ...this.newFriend })
    friendForm.reset()
  }

}
