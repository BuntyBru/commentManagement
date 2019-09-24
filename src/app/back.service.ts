import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private router: Router) { }

  loggedIn:boolean=false;
  commentListShow:any=[];
  totalPages:any=[];


  statusList:any=[
    {
      type:'image',
      id:1,
      heading:'Now you know!',
      imageLink:"assets/image1.png",
      like:false,
      dislike:false,
      commentCounter:2,
      commentChildren:[
        { 
          author:'Matt',
          image:'assets/avatar2.svg',
          time:Date(),
          comment:'How Artistic',
          like:false,
          dislike:false,
          isReply:false,
          id:'_n6wlrqcvs',
          commentChildren: [
            {
                
              author:'Arun',
              image:'assets/avatar3.svg',
              time:Date(),
              comment:'Yeah Funny',
              like:false,
              dislike:false,
              isReply:false,
              id:'_q3ydhbg6d',
              commentChildren:[
                {
              
                  author:'Ravi',
                  image:'assets/avatar4.svg',
                  time:Date(),
                  comment:'Looks cool',
                  like:false,
                  dislike:false,
                  isReply:false,
                  id:'_6xjdn72qq',
                  commentChildren:[]
                 }
              ]
            },
          
          ]
        },
        {
              
          author:'Joseph',
          image:'assets/avatar5.svg',
          time:Date(),
          comment:'Ha ha , whats the name of the artist ?',
          like:false,
          dislike:false,
          isReply:false,
          id:'_pguz5k5xr',
          commentChildren:[]
        }
      ]
    },
    {
      type:'small',
      id:2,
      heading:'The government offered to buy my guns from me',
      story:"But after a thorough background check of the buyer, I am not comfortable with selling weapons to organized crime.",
      like:false,
      dislike:false,
      commentCounter:2,
      commentChildren:[
        { 
          author:'Alisha',
          image:'assets/avatar11.svg',
          time:Date(),
          comment:'You can sell them water guns',
          like:false,
          dislike:false,
          isReply:false,
          id:'_o4y9bqel5',
          commentChildren: [
            {
                
              author:'Arun',
              image:'assets/avatar6.svg',
              time:Date(),
              comment:'haha',
              like:false,
              dislike:false,
              isReply:false,
              id:'_eoz643ene',
              commentChildren:[]
            },
          
          ]
        },
        {
              
          author:'Rohit',
          image:'assets/avatar7.svg',
          time:Date(),
          comment:'Take the money and give them nothing',
          like:false,
          dislike:false,
          isReply:false,
          id:'_mixgz5w8c',
          commentChildren:[]
        }
      ]

    },
    {
      type:'image',
      id:3,
      heading:'Nothing but facts',
      imageLink:"assets/image2.jpg",
      like:false,
      dislike:false,
      commentCounter:0,
      commentChildren:[]
    },
    {
      type:'small',
      id:4,
      heading:'What do you call a boat full of polite football players?',
      like:false,
      dislike:false,
      commentCounter:1,
      story:"A good sportsman ship , Haha",
      commentChildren:[
        { 
          author:'Rohit',
          image:'assets/avatar7.svg',
          time:Date(),
          comment:'Poor Joke',
          like:false,
          dislike:false,
          isReply:false,
          id:'_loijkc77t',
          commentChildren: []
        },
        
      ]
    },
    {
      type:'small',
      id:5,
      heading:'What did Raichu say when it saw Pikachu ?',
      like:false,
      dislike:false,
      commentCounter:1,
      story:"Raichu",
      commentChildren:[
        { 
          author:'Arijit',
          image:'assets/avatar8.svg',
          time:Date(),
          comment:'This should be in the kids section',
          like:false,
          dislike:false,
          isReply:false,
          id:'_1vg68woyl',
          commentChildren: []
        }
      ]
    },
    {
      type:'image',
      id:6,
      heading:'🔥 Baby cheetah with a mohawk',
      like:false,
      dislike:false,
      commentCounter:10,
      imageLink:"assets/image3.jpg",
      commentChildren:[{ 
        author:'Alan',
        image:'assets/avatar9.svg',
        time:Date(),
        comment:'Where did you got it clicked',
        like:false,
        dislike:false,
        isReply:false,
        id:'_cc0yxikyo',
        commentChildren: []
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_e64pj08a8',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_5p9u36wi6',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_5v0ooixfu',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_3xf39pr56',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_h7n27ogyo',
        commentChildren:[]
      }, 
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_r9lsdgoi1',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_8s8i6q3c3',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_cdp6857u1',
        commentChildren:[]
      },
      {
            
        author:'Martin',
        image:'assets/avatar10.svg',
        time:Date(),
        comment:'Somewhere in Africa',
        like:false,
        dislike:false,
        isReply:false,
        id:'_glr0y5ajx',
        commentChildren:[]
      }]
    }
  ];

  


  
  //generating random id's
  generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  

  isAuthenticated()
  {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.loggedIn)
      },800);

    });
    return promise;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////LOGIN FUNCTION///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

login()
{
  this.loggedIn = true;
  this.router.navigate(['/main']);
}

userLogin()
{
  this.router.navigate(['/login']);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////LOGOUT FUNCTION///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

logout()
{
  this.loggedIn = false;
}

}
