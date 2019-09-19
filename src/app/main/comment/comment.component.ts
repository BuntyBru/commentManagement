import { Component, OnInit,Input } from '@angular/core';
import {BackService} from '../../back.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() id: string;
  pid =1;
  constructor(private backService : BackService) { }

  ngOnInit() {
    console.log(this.id);
  }

}
