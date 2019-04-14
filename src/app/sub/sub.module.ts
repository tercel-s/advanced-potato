import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';

import { TabContainerComponent } from './tab-container/tab-container.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    TabContainerComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    TabsModule
  ]
})
export class SubModule { }
