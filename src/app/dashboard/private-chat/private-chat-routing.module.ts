import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from 'src/app/home/chat/chat.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { PrivateChatComponent } from './private-chat.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateChatComponent,
    children: [{ path: ':userId', component: ChatBodyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateChatRoutingModule {}
