import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  allowNewServer = false
  serverCreationService = 'no creation created'
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationService = 'Server was created'
  }
}
