import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';

import { HomeComponent } from './home.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children:[
      { path: '', redirectTo: '/home/member', pathMatch: 'full' },
      { path: 'member', component: MemberComponent},
      { path: '404', component: NotfoundComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
