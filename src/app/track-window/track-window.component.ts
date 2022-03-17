import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-track-window',
  templateUrl: './track-window.component.html',
  styleUrls: ['./track-window.component.css']
})
export class TrackWindowComponent implements OnInit {

  constructor() { }
  
  @HostListener('window:focus', ['$event'])
    onFocus(event:any) {
    console.log("****user attempted leaving but changed its mind, do actions here");
    
  } 
  
  @HostListener('window:blur', ['$event'])
    onBlur(event:any) {
    this.playAudio();
    alert("****user left, user tumi valo hoye jao");
    //alert("user leave korso ken?")
  } 
  
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/FM9B3TC-alarm.mp3";
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
  }

}
