import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateChatRoutingModule } from './private-chat-routing.module';
import { PrivateChatComponent } from './private-chat.component';


@NgModule({
  declarations: [
    PrivateChatComponent
  ],
  imports: [
    CommonModule,
    PrivateChatRoutingModule
  ]
})
export class PrivateChatModule { }
