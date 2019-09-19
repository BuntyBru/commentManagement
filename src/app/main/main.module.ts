import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [StatusComponent, CommentComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
