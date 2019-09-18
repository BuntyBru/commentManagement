import { Component, OnInit } from '@angular/core';
import {BackService} from '../../back.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(private backService:BackService) { }

  ngOnInit() {
  }

}
