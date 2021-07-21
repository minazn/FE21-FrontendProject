import { Component, OnInit } from '@angular/core';
import { Events } from '../images';
import { ShowgalleryService } from '../showgallery.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  pics = Events;
  gallery = "";
  

  constructor(private SG:ShowgalleryService) { 
     this.gallery= this.SG.showGallery(this.pics);
  }
  
  

  ngOnInit(): void {
  }

}
