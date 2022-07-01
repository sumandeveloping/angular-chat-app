import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userList: User[] = [
    { id: 1, name: 'Suman', lastMsg: 'Hello There!', lastMsgRead: false },
    { id: 2, name: 'Rishi', lastMsg: 'Hello There!', lastMsgRead: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
