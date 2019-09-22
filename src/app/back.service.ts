import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private router: Router) { }

  loggedIn:boolean=false;
  commentListShow:any=[];

  statusList:any=[
    {
      type:'image',
      id:1,
      heading:'Now you know!',
      imageLink:"assets/image1.png",
      commentChildren:[
        { 
          author:'Matt',
          image:'assets/avatar2.svg',
          time:'18th Sept 2019',
          comment:'How Artistic',
          isReply:false,
          id:'_n6wlrqcvs',
          commentChildren: [
            {
                
              author:'Arun',
              image:'assets/avatar3.svg',
              time:'18th Sept 2019',
              comment:'Yeah Funny',
              isReply:false,
              id:'_q3ydhbg6d',
              commentChildren:[
                {
              
                  author:'Ravi',
                  image:'assets/avatar4.svg',
                  time:'19th Sept 2019',
                  comment:'Looks cool',
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
          time:'19th Sept 2019',
          comment:'Ha ha , whats the name of the artist ?',
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
      commentChildren:[
        { 
          author:'Alisha',
          image:'assets/avatar11.svg',
          time:'18th Sept 2019',
          comment:'You can sell them water guns',
          isReply:false,
          id:'_o4y9bqel5',
          commentChildren: [
            {
                
              author:'Arun',
              image:'assets/avatar6.svg',
              time:'18th Sept 2019',
              comment:'haha',
              isReply:false,
              id:'_eoz643ene',
              commentChildren:[]
            },
          
          ]
        },
        {
              
          author:'Rohit',
          image:'assets/avatar7.svg',
          time:'19th Sept 2019',
          comment:'Take the money and give them nothing',
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
      commentChildren:[]
    },
    {
      type:'small',
      id:4,
      heading:'What do you call a boat full of polite football players?',
      story:"A good sportsman ship , Haha",
      commentChildren:[
        { 
          author:'Rohit',
          image:'assets/avatar7.svg',
          time:'18th Sept 2019',
          comment:'Poor Joke',
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
      story:"Raichu",
      commentChildren:[
        { 
          author:'Arijit',
          image:'assets/avatar8.svg',
          time:'18th Sept 2019',
          comment:'This should be in the kids section',
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
      imageLink:"assets/image3.jpg",
      commentChildren:[
        { 
          author:'Alan',
          image:'assets/avatar9.svg',
          time:'18th Sept 2019',
          comment:'Where did you got it clicked',
          isReply:false,
          id:'_cc0yxikyo',
          commentChildren: []
        },
        {
              
          author:'Martin',
          image:'assets/avatar10.svg',
          time:'19th Sept 2019',
          comment:'Somewhere in Africa',
          isReply:false,
          id:'_e64pj08a8',
          commentChildren:[]
        }
      ]
    }
  ];

  


  login()
  {
    this.loggedIn = true;
    this.router.navigate(['/main']);
  }

  //generating random id's
  generateID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
}
