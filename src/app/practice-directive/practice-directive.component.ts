import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directive',
  templateUrl: './practice-directive.component.html',
  styleUrls: ['./practice-directive.component.css']
})
export class PracticeDirectiveComponent implements OnInit {
  showP = true;
  logClick  = [];
  i = 0;
  constructor() { }

  ngOnInit() {
  }

  toggleP(){
    this.showP = !this.showP;
    this.logClick.push(new Date());
  }

 }
