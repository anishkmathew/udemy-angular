import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    serverID = 11;
    serverStatus:string = 'Online'; 
    allowNewServers = false;
    serverAddStatus = 'No servers are added.';
    serverName = 'Test Server';
    constructor() {
        setTimeout(()=>{
            this.allowNewServers = true
        },2000)
     }
  
    ngOnInit() {

    }
    
    onCreateServer(){
        this.serverAddStatus = 'One new server added. The server name is ' + this.serverName;
    }

    onUpdateServerName(event:any){
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;        
    }

}