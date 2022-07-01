import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChatComponent } from './group-chat.component';

const routes: Routes = [{ path: '', component: GroupChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupChatRoutingModule { }
