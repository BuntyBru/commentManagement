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

  ngOnInit() {
   
  }

  
  comment(id,key)
  {
    console.log(key)
    this.currentID = id;
    this.commentSection[id]=true;
    console.log(this.backService.commentListShow)
  }

  mainComment(key)
  {
    let obj:any = {
      author:'Bunty',
      image:'assets/avatar1.svg',
      time:'21st Sept 2019',
      comment:this.commentX[this.currentID],
      id:this.backService.generateID(),
      isReply:false,
      commentChildren:[]
    };
    key.commentChildren.push(obj)

    console.log("After addition", key);
    
    this.commentX[this.currentID]='';
    
  }

}
