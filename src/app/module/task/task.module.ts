import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './addtask/addtask.component';

import { PendingTaskComponent } from './pending-task/pending-task.component';
import { CompleteTaskComponent } from './complete-task/complete-task.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TaskComponent,
    AddtaskComponent,
    
    PendingTaskComponent,
    CompleteTaskComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class TaskModule { }
