import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:[
      { path: '', redirectTo: '/admin/main', pathMatch: 'full' },
      { path: 'main', component: MainComponent } ,
      { path: 'member', loadChildren: () => import('../admin/member/member.module').then(m => m.MemberModule) },
      { path: 'menu', component: MenuComponent }    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
/**
 { path: 'member', loadChildren: () => import('../admin/member/member.module').then(m => m.MemberModule) },
 * 
 */