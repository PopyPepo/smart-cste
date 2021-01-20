import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [HomeComponent, MenuComponent, HeaderComponent, MainComponent, MemberComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
