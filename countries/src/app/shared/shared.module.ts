import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { SearchOptsComponent } from './search-opts/search-opts.component';

@NgModule({
  declarations: [SearchOptsComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [SearchOptsComponent],
})
export class SharedModule {}
