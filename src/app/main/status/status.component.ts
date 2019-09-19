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

  ngOnInit() {
   
  }

  
  comment(id)
  {
    console.log(id)
    this.commentSection[id]=true;
    this.backService.statusList.forEach((x)=>{
      if(x.id == id)
      {
        console.log("this is the id", id);
        this.backService.commentListShow[x.id]=[];
        x.commentChildren.forEach((z)=>{
          this.backService.commentListShow[x.id].push(this.backService.commentDict[z])
        })
      }
    })

    console.log(this.backService.commentListShow)
  }

}
