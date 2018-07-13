import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ServersComponent } from './servers/servers.component';
import { PracticeDirectiveComponent } from './practice-directive/practice-directive.component';
/*import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'; */

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DataBindingComponent,
    ServersComponent,
    PracticeDirectiveComponent,
    /*WarningAlertComponent,
    SuccessAlertComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
