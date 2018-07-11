import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
    allowNewServers = false;
    constructor() {
        setTimeout(()=>{
            this.allowNewServers = true
        },2000)
     }
  
    ngOnInit() {

    }
    serverID = 11;
    serverStatus:string = 'Online';  

}