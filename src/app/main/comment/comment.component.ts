import { Component, OnInit,Input } from '@angular/core';
import {BackService} from '../../back.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface commentObj {
  id:string
  author:string;
  image:string;
  time:string;
  comment:string;
  commentChildren:commentObj[];
}

const TREE_DATA: commentObj[] = [
  {
    id:'11',
    author:'Matt',
    image:'assets/avatar2.svg',
    time:'18th Sept 2019',
    comment:'How Artistic',
    commentChildren: [
      {
        id:'111',
        author:'Arun',
        image:'assets/avatar3.svg',
        time:'18th Sept 2019',
        comment:'Yeah Funny',
        commentChildren:[
          {
            id:'112',
            author:'Ravi',
            image:'assets/avatar4.svg',
            time:'19th Sept 2019',
            comment:'Looks cool',
            commentChildren:[]
           }
        ]
      },
    
    ]
  },
  {
    id:'12',
    author:'Joseph',
    image:'assets/avatar5.svg',
    time:'19th Sept 2019',
    comment:'Ha ha , whats the name of the artist ?',
    commentChildren:[]
  }
];

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() id: string;
  treeControl = new NestedTreeControl<commentObj>(node => node.commentChildren);
  dataSource = new MatTreeNestedDataSource<commentObj>();

  constructor(private backService : BackService) {
    this.dataSource.data = TREE_DATA;
   }

  ngOnInit() {
    console.log(this.id);
  }

  reply(key)
  {
    console.log(key);
    
  }
  hasChild = (_: number, node: commentObj) => !!node.commentChildren && node.commentChildren.length > 0;
}
