import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateChatRoutingModule } from './private-chat-routing.module';
import { PrivateChatComponent } from './private-chat.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [PrivateChatComponent, ChatBodyComponent],
  imports: [CommonModule, PrivateChatRoutingModule, MaterialModule],
})
export class PrivateChatModule {}
