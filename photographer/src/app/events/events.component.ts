import { Component, OnInit } from '@angular/core';
import { Events } from '../images';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  pics = Events;
  gallery = "";
  

  constructor() { 
  }
  
  

  ngOnInit(): void {
  }

}
