import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p class="warning">
  This is a test warning alert! This goes inside the success alert on top. And its from inline template and css.
</p>`,
  styles: [`.warning {
    color: orange;
  }`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
