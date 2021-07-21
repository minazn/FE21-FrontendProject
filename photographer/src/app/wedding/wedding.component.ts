import { Component, OnInit } from '@angular/core';
import { wedding } from '../images';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  pics = wedding;
  constructor() { }

  ngOnInit(): void {
  }

}
