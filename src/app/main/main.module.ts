import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { CommentComponent } from './comment/comment.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [StatusComponent, CommentComponent, DialogComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
