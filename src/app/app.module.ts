import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenRecordingComponent } from './screen-recording/screen-recording.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { EyeMovementComponent } from './eye-movement/eye-movement.component';
import { TrackWindowComponent } from './track-window/track-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenRecordingComponent,
    EyeMovementComponent,
    TrackWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ScreenRecordingComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const element = createCustomElement(ScreenRecordingComponent, { injector });


    customElements.define('screen-recording', element);
  }

  
  ngDoBootstrap() {}
}
