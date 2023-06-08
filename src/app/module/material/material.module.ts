import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const materialComponents = [
  MatSnackBarModule,
  MatProgressSpinnerModule  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule

  ],
  exports: [
    MatSnackBarModule

  ]
})
export class MaterialModule { }
