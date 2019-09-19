import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private router: Router) { }

  loggedIn:boolean=false;
  commentListShow:any=[];

  statusList=[
    {
      type:'image',
      id:0,
      heading:'Now you know!',
      imageLink:"assets/image1.png",
      commentChildren:['11','12','13','14']
    },
    {
      type:'small',
      id:1,
      heading:'The government offered to buy my guns from me',
      story:"But after a thorough background check of the buyer, I am not comfortable with selling weapons to organized crime.",
      commentChildren:['15','16']

    },
    {
      type:'image',
      id:2,
      heading:'Nothing but facts',
      imageLink:"assets/image2.jpg",
      commentChildren:['17']
    },
    {
      type:'small',
      id:3,
      heading:'What do you call a boat full of polite football players?',
      story:"A good sportsman ship , Haha",
      commentChildren:['18']
    },
    {
      type:'small',
      id:4,
      heading:'What did Raichu say when it saw Pikachu ?',
      story:"Raichu",
      commentChildren:['19']
    },
    {
      type:'image',
      id:5,
      heading:'🔥 Baby cheetah with a mohawk',
      imageLink:"assets/image3.jpg",
      commentChildren:['20']
    }
  ];

  commentDict = {
        '11':{
            
            author:'Matt',
            image:'assets/avatar2.svg',
            time:'18th Sept 2019',
            comment:'How Artistic',
            commentChildren:['111','112']
        },
       '12': {
          
          author:'Arun',
          image:'assets/avatar3.svg',
          time:'18th Sept 2019',
          comment:'Yeah Funny',
          commentChildren:['121']
        },
       '13':{
        
        author:'Ravi',
        image:'assets/avatar4.svg',
        time:'19th Sept 2019',
        comment:'Looks cool',
        commentChildren:[]
       },

      '14':{
        
        author:'Joseph',
        image:'assets/avatar5.svg',
        time:'19th Sept 2019',
        comment:'Ha ha , whats the name of the artist ?',
        commentChildren:['141']
      },
      '15':{
            
        author:'Aristotle',
        image:'assets/avatar6.svg',
        time:'18th Sept 2019',
        comment:'How Artistic',
        commentChildren:['151','152']
    },
   '16': {
      
      author:'Arun',
      image:'assets/avatar7.svg',
      time:'18th Sept 2019',
      comment:'Yeah Funny',
      commentChildren:['161']
    },
   '17':{
    
    author:'Ravi',
    image:'assets/avatar8.svg',
    time:'19th Sept 2019',
    comment:'Looks cool',
    commentChildren:[]
   },

  '18':{
    
    author:'Joseph',
    image:'assets/avatar9.svg',
    time:'19th Sept 2019',
    comment:'Ha ha , whats the name of the artist ?',
    commentChildren:['181']
  },
  '19':{
    
    author:'Janardan',
    image:'assets/avatar10.svg',
    time:'19th Sept 2019',
    comment:'Ha ha , whats the name of the artist ?',
    commentChildren:['191']
  },
  '20':{
    
    author:'Janice',
    image:'assets/avatar11.svg',
    time:'19th Sept 2019',
    comment:'Ha ha , whats the name of the artist ?',
    commentChildren:['201']
  },

    }

    commentListFinal =  [
      { 
        author:'Matt',
        image:'assets/avatar2.svg',
        time:'18th Sept 2019',
        comment:'How Artistic',
        commentChildren: [
          {
              
            author:'Arun',
            image:'assets/avatar3.svg',
            time:'18th Sept 2019',
            comment:'Yeah Funny',
            commentChildren:[
              {
            
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
            
        author:'Joseph',
        image:'assets/avatar5.svg',
        time:'19th Sept 2019',
        comment:'Ha ha , whats the name of the artist ?',
        commentChildren:[]
      }
    ];

  login()
  {
    this.loggedIn = true;
    this.router.navigate(['/main']);
  }
}
