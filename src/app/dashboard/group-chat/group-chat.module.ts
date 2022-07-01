import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupChatRoutingModule } from './group-chat-routing.module';
import { GroupChatComponent } from './group-chat.component';


@NgModule({
  declarations: [
    GroupChatComponent
  ],
  imports: [
    CommonModule,
    GroupChatRoutingModule
  ]
})
export class GroupChatModule { }
