import { Component, OnInit } from '@angular/core';
import { images } from '../images';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  images=images;
  constructor() { }

  ngOnInit(): void {
  }

}
