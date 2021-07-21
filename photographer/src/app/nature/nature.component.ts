import { Component, OnInit } from '@angular/core';
import { Nature } from '../images';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  pics = Nature;

  constructor() { }

  ngOnInit(): void {
  }

}
