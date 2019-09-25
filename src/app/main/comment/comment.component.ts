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
  replyBtnHeading='Login to reply';
  pageIndex:any;
  lastPageLabel:string;
  constructor(private backService : BackService) {
    
   }

  ngOnInit() {
    this.backService.statusList.forEach((x)=>{
      if(x.id == this.id)
      {
        this.dataSource.data = x.commentChildren[0];
      
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
   
    key.isReply=true;
   
    }
    else
    {
      this.backService.userLogin();
    }
    
  }
  hasChild = (_: number, node: any) =>{ 
   
    return !!node.commentChildren && node.commentChildren.length > 0;
  }

  //function for refreshing the comment tree
  refreshTree()
  {
    
    let _data = this.dataSource.data;
    this.dataSource.data = null;
    this.dataSource.data = _data;
  }

  commentData(id,node)
  {
   if(this.str[id].trim().length==0)
   {
     
     this.str[id]='';
     return;
   }
  
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
    if(node.commentCounter >= 0)
    {
      node.commentCounter=node.commentCounter+1;
      let limit = Math.ceil(node.commentCounter/5)-1;
      if(node.commentChildren[limit])
      {
      node.commentChildren[limit].push(obj);
      this.backService.statusList.forEach((x)=>{
        if(x.id == this.id)
        {
          this.dataSource.data = x.commentChildren[limit];
          
        }
      });
     
      }
      else
      {
        node.commentChildren[limit]=[];
        node.commentChildren[limit].push(obj);
        this.backService.statusList.forEach((x)=>{
          if(x.id == this.id)
          {
            this.dataSource.data = x.commentChildren[limit];
            
          }
        });
        
      }
      this.pageIndex=limit;
      this.backService.totalPages[id]=node.commentCounter;
    }
    else
    {
      node.commentChildren.push(obj);
      node.isReply=false;
    }
    
    this.refreshTree();
    this.str[id]='';
  }

  mainComment()
  {
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

  //function for Pagination
  helloPagination(event)
  {
    
    this.backService.statusList.forEach((x)=>{
      if(x.id == this.id)
      {
        this.dataSource.data = x.commentChildren[event.pageIndex];
      }
    });


  }


  

}
