import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [{
  path: '', 
  children: [
    { path: 'basics', component: BasicsComponent },
    { path: 'dinamics', component: DinamicsComponent },
    { path: 'switches', component: SwitchesComponent },
    { path: '**', redirectTo: 'basics', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule { }
