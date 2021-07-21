import { Component, OnInit } from '@angular/core';
import { urban } from '../images';

@Component({
  selector: 'app-urban',
  templateUrl: './urban.component.html',
  styleUrls: ['./urban.component.css']
})
export class UrbanComponent implements OnInit {
  pics = urban;
  constructor() { }

  ngOnInit(): void {
  }

}
