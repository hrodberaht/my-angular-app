import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No creation allowed";
  
  constructor() {
    
    setTimeout(() => {
      this.allowNewServer = true;
    }
    ,2000)
    
  }
  
  onCreateServer() {
    this.serverCreationStatus = "Server was create";
  }
  
  onUpdateServerName() {
  }

  ngOnInit() {
  }

}
