import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { BasicsComponent } from './basics/basics.component';


@NgModule({
  declarations: [SwitchesComponent, DinamicsComponent, BasicsComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
