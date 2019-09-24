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

  
  comment(id,key)
  {
    //console.log(key)
    this.currentID = id;
    this.commentSection[id]=true;
    //console.log(this.backService.commentListShow);
    this.backService.totalPages[id]=key.commentCounter;
    console.log("here we can make changes for the pagination part", this.backService.totalPages[id]);

  }

  //Function for Like
  onLikeStatus(status)
  {
    
    console.log("this status was liked", status);
    status.like=true;
    if(status.dislike)
    {
      status.dislike=false;
    }
    

  }

  //Function for duisliking status
  onDislikeStatus(status)
  {
   
    console.log("This status was disliked", status);
    status.dislike =true;
    if(status.like)
    {
      status.like=false;
    }
    

  }

}
