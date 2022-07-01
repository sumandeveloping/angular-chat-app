import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateChatComponent } from './private-chat.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateChatComponent,
    pathMatch: 'full',
    children: [{ path: '/:userId' }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateChatRoutingModule {}
