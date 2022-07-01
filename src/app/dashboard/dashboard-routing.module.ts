import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'private-chat',
        loadChildren: () =>
          import('./private-chat/private-chat.module').then(
            (m) => m.PrivateChatModule
          ),
      },
      {
        path: 'group-chat',
        loadChildren: () =>
          import('./group-chat/group-chat.module').then(
            (m) => m.GroupChatModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
