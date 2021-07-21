import { Component, OnInit } from '@angular/core';
import { people } from '../images';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  pics = people;
  constructor() { }

  ngOnInit(): void {
  }

}
