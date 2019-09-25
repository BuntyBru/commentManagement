import { Component, OnInit } from '@angular/core';
import {BackService} from '../../back.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(private backService:BackService) { }
  commentSection:any=[];
  commentX:any=[];
  currentID='';
  commentBtnHeading='See Comments';

  ngOnInit() {
    if(this.backService.loggedIn)
    {
      this.commentBtnHeading='Comment';
    }
   
  }

  //Function for showing the comment part
  comment(id,key)
  {
    this.currentID = id;
    this.commentSection[id]=true;
    this.backService.totalPages[id]=key.commentCounter;

  }

  //Function for Like
  onLikeStatus(status)
  {
    status.like=true;
    if(status.dislike)
    {
      status.dislike=false;
    }
  }

  //Function for duisliking status
  onDislikeStatus(status)
  {
   
    status.dislike =true;
    if(status.like)
    {
      status.like=false;
    }
  }

}
