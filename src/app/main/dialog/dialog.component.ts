import { Component, OnInit } from '@angular/core';
import {BackService} from '../../back.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  formItems= [
    {value: 'is', viewValue: 'Image '},
    {value: 'ns', viewValue: 'Normal '},
  ];
  formType:string='';
  imageLink:boolean=false;
  imageLinkClass:string='';
  constructor(private backService:BackService, public dialogRef: MatDialogRef<DialogComponent>,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.imageLink=false;
    console.log("DIALOGUE", this.imageLink);
  }

  selectFormType(item)
  {
    this.formType=item.value;
  }

  onSubmit(form)
  {
   
    if(!form.valid)
    {
      return;
    }
    else
    {
      console.log(this.formType,form.value);
      let obj={};
      if(this.formType == 'is')
      {
         obj = {
          type:'image',
          id:this.backService.generateID(),
          heading:form.value.heading,
          imageLink:form.value.image_Link,
          like:false,
          dislike:false,
          commentCounter:0,
          commentChildren:[]
        }
      }
      else{
         obj = {
          type:'small',
          id:this.backService.generateID(),
          heading:form.value.heading,
          story:form.value.mainPart,
          like:false,
          dislike:false,
          commentCounter:0,
          commentChildren:[]
          }
      }
     this.backService.statusList.unshift(obj); 
    }
    form.reset();
    this.dialogRef.close();
    this.openSnackBar('Status Added','Dismiss');
  }

  preview(form)
  {
    this.imageLink=true;
    console.log("this is the link",form.value.image_Link);
  }

  updateUrl($event,form)
  {
      alert("Image Link broken");
      this.imageLink=false;
      form.controls['image_Link'].reset();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  

}
