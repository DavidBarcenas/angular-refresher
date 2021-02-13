import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
