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
  constructor(private backService : BackService) {
    
   }

  ngOnInit() {
    this.backService.statusList.forEach((x)=>{
      if(x.id == this.id)
      {
        this.dataSource.data = x.commentChildren;
      }
    });
    
  }

  reply(key)
  {
    console.log('this is the id', this.id);
    key.isReply=true;
    console.log(key);
    
  }
  hasChild = (_: number, node: any) => !!node.commentChildren && node.commentChildren.length > 0;

  commentData(id,node)
  {
   // console.log("Enter clicked",this.str[id],id)
   console.log(id);
   console.log(this.id); 
    let obj:any = {
      author:'Bunty',
      image:'assets/avatar1.svg',
      time:'21st Sept 2019',
      comment:this.str[id],
      id:this.backService.generateID(),
      isReply:false,
      commentChildren:[]
    };
    node.commentChildren.push(obj);

    
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

}
