import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {BackService} from '../back.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private backService:BackService) { }

  ngOnInit() {

    console.log("This user is authenticated",this.backService.loggedIn);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1000px',
      data: {name: this.name, animal: this.animal},
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  userLogin()
  {
    this.backService.userLogin();
  }
}
