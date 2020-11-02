import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  allowNewServer = false
  serverCreationService = 'no creation created'
  serverName = ""
  serverCreated = false
  serverStatus = false
  constructor() { 
    this.serverStatus = Math.random() > .5 ? 'Online':'Offline'
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationService = 'Server was created ' + this.serverName
  }
  onUpdateserverName(event: any){
    this.serverCreated = !this.serverCreated
  }

  getServerStatus(){
    return this.serverStatus = !this.serverStatus
  }
}
