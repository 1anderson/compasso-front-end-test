import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './modules/user/user-routing.module';


@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    UserRoutingModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
