import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss'],
})
export class PrivateChatComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  userList: any[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subs.add(
      this.userService.findAllUsers().subscribe((users) => {
        console.log('Finding users');
        console.log(users);
        this.userList = users;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
