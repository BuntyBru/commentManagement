import { Component, OnInit,Input } from '@angular/core';
import {BackService} from '../../back.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { $ } from 'protractor';


/*interface commentObj {
  id:string
  author:string;
  image:string;
  time:string;
  comment:string;
  
  commentChildren:commentObj[];
}*/

const TREE_DATA: any[] = [];

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() id: number;
  @Input() commentPart:any=[];
  str:any=[];
  treeControl = new NestedTreeControl<any>(node => node.commentChildren);
  dataSource = new MatTreeNestedDataSource<any>();
  commentDo:boolean=true;
  commentX:any=[];
  someVar=new MatTreeNestedDataSource<any>();
  someArr=[0,1];
  replyBtnHeading='Login to reply';
  constructor(private backService : BackService) {
    
   }

  ngOnInit() {
    this.backService.statusList.forEach((x)=>{
      if(x.id == this.id)
      {

        this.dataSource.data = x.commentChildren;
        console.log(this.dataSource.data);
      ///this.someVar.data = [x.commentChildren[0]]
       //console.log(this.someVar.data);
      }
    });

    if(this.backService.loggedIn)
    {
      this.replyBtnHeading='Reply';
    }
    
  }

  reply(key)
  {
    if(this.backService.loggedIn)
    {
    console.log('this is the id', this.id);
    key.isReply=true;
    console.log(key);
    }
    else
    {
      this.backService.userLogin();
    }
    
  }
  hasChild = (_: number, node: any) =>{ 
   // console.log(node);
   // console.log(">>>>>>>>>>>>>>>>>>",!!node.commentChildren && node.commentChildren.length > 0)
    return !!node.commentChildren && node.commentChildren.length > 0;
  }

  commentData(id,node)
  {
   // console.log("Enter clicked",this.str[id],id)
   console.log(node);
   console.log(this.id); 
    let obj:any = {
      author:'Bunty',
      image:'assets/avatar1.svg',
      time:Date(),
      comment:this.str[id],
      like:false,
      dislike:false,
      id:this.backService.generateID(),
      isReply:false,
      commentChildren:[]
    };
    node.commentChildren.push(obj);
    if(node.commentCounter)
    {
      node.commentCounter=node.commentCounter+1;
    }
    let _data = this.dataSource.data;
    this.dataSource.data = null;
    this.dataSource.data = _data; 
    this.str[id]='';

  
   
  }

  mainComment()
  {
    console.log(this.commentX[this.id]);
    console.log('Comment part', this.commentPart);
    this.commentX[this.id]='';


    let _data = this.dataSource.data;
    this.dataSource.data = null;
    this.dataSource.data = _data; 
  }

  //Function for liking and disliking the internal comments
  likeComment(comment)
  {
   comment.like=true;
   if(comment.dislike)
   {
     comment.dislike=false;
   }

  }

  dislikeComment(comment)
  {
   comment.dislike=true;
   if(comment.like)
   {
     comment.like=false;
   }

  }

  helloPagination(event)
  {
    console.log(event);
  }


  

}
