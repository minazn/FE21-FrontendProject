import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info = new FormGroup ({
    name : new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    text: new FormControl("",Validators.required)
    
  })
  constructor(private renderer:Renderer2) { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.info.valid) {
      var a = this.info.value;
      console.log(a);
      this.info.reset();
    }
  }
  
  
  check :boolean = false;

  addClass() {
  this.check = true;
  }
}