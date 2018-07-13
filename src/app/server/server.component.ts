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
    serverCreated = false;
    servers = ["Test Server", "Test Server 2"]
    constructor() {
        setTimeout(()=>{
            this.allowNewServers = true
        },2000);
        
     }
  
    ngOnInit() {

    }
    
    getColor(){
        return this.serverStatus == 'Online' ? 'green' : 'red';
    }

    onCreateServer(){
        this.serverAddStatus = 'One new server added. The server name is ' + this.serverName;
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
       // this.serverName = '';
    }

    onUpdateServerName(event:any){
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;        
    }

}