import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
  
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName:string, blueprintContent:string}>();
  //newServerName = 'Anish Server';
  //newServerContent = 'Test Content initial';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
 
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement) {
    //console.log(nameInput);
    
    this.serverCreated.emit({
      //serverName:this.newServerName,
      serverName:nameInput.value,
      //serverContent:this.newServerContent  
      serverContent:this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName:nameInput.value,
     // blueprintContent:this.newServerContent    
      blueprintContent:this.serverContentInput.nativeElement.value
    })
  }
}
